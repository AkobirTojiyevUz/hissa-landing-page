#!/bin/sh
# ============================================================================
#  deploy.sh — hissa-landing (frontend)'ni staging VM'ga Docker Compose bilan deploy.
#  Runner image'ni qurib registry'ga push qilgan; bu skript SSH orqali VM'ga
#  ulanib `docker compose up -d` qiladi. App secret yo'q (static landing).
#
#  CI muhitidan: DEPLOY_HOST, DEPLOY_USER, DEPLOY_SSH_KEY, IMAGE,
#                CI_REGISTRY, CI_REGISTRY_USER, CI_REGISTRY_PASSWORD
# ============================================================================
set -eu

APP="hissa-landing"
FOLDER="bnpl/${APP}"

# ── SSH agent ──
mkdir -p ~/.ssh && chmod 700 ~/.ssh
printf 'Host *\n\tStrictHostKeyChecking no\n' > ~/.ssh/config
eval "$(ssh-agent -s)"
printf '%s\n' "$DEPLOY_SSH_KEY" | ssh-add -

# ── compose faylni ko'chirish ──
ssh -o StrictHostKeyChecking=no "$DEPLOY_USER@$DEPLOY_HOST" "mkdir -p $FOLDER"
scp -o StrictHostKeyChecking=no docker-compose.yml "$DEPLOY_USER@$DEPLOY_HOST:$FOLDER/docker-compose.yml"

# ── remote: registry login + compose up (secret yo'q) ──
REMOTE="export IMAGE='$IMAGE';"
REMOTE="$REMOTE printf %s '$CI_REGISTRY_PASSWORD' | docker login '$CI_REGISTRY' -u '$CI_REGISTRY_USER' --password-stdin;"
REMOTE="$REMOTE cd $FOLDER && docker compose pull && docker compose up -d && docker image prune -f;"

ssh -o StrictHostKeyChecking=no "$DEPLOY_USER@$DEPLOY_HOST" "$REMOTE"
echo "deploy: $APP -> $DEPLOY_HOST OK ($IMAGE)"
