import React, { useState } from 'react';
import { useI18n } from '../app/i18n/I18nContext';
import { Modal } from '../shared/ui/Modal';
import { Button } from '../shared/ui/Button';
import { CheckCircle2, Building, Phone, Hash } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MerchantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MerchantModal: React.FC<MerchantModalProps> = ({ isOpen, onClose }) => {
  const { t } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    companyName: '',
    inn: '',
    phone: '',
    category: 'retail',
    turnover: 'turnover2',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FF655B', '#10B981', '#3B82F6'],
      });
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      companyName: '',
      inn: '',
      phone: '',
      category: 'retail',
      turnover: 'turnover2',
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleReset} title={isSubmitted ? undefined : t.modal.title}>
      {isSubmitted ? (
        <div className="text-center py-8 space-y-4 animate-in fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-500 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
            {t.modal.successMessage}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
            {t.modal.successDesc}
          </p>
          <div className="pt-4">
            <Button variant="primary" size="md" onClick={handleReset} className="w-full">
              {t.modal.close}
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 -mt-2 mb-4">
            {t.modal.subtitle}
          </p>

          {/* Company Name */}
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
              {t.modal.companyName}
            </label>
            <div className="relative">
              <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                required
                type="text"
                placeholder={t.modal.companyPlaceholder}
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full pl-10 pr-3.5 py-2.5 bg-gray-50 dark:bg-[#1D2329] border border-gray-200 dark:border-gray-800 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FF655B]"
              />
            </div>
          </div>

          {/* INN / STIR */}
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
              {t.modal.inn}
            </label>
            <div className="relative">
              <Hash className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                required
                type="text"
                maxLength={9}
                placeholder={t.modal.innPlaceholder}
                value={formData.inn}
                onChange={(e) => setFormData({ ...formData, inn: e.target.value })}
                className="w-full pl-10 pr-3.5 py-2.5 bg-gray-50 dark:bg-[#1D2329] border border-gray-200 dark:border-gray-800 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FF655B]"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
              {t.modal.phone}
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                required
                type="tel"
                placeholder={t.modal.phonePlaceholder}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-10 pr-3.5 py-2.5 bg-gray-50 dark:bg-[#1D2329] border border-gray-200 dark:border-gray-800 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FF655B]"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
              {t.modal.category}
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-[#1D2329] border border-gray-200 dark:border-gray-800 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FF655B]"
            >
              <option value="retail">{t.modal.categoryRetail}</option>
              <option value="electronics">{t.modal.categoryElectronics}</option>
              <option value="fashion">{t.modal.categoryFashion}</option>
              <option value="services">{t.modal.categoryServices}</option>
            </select>
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              className="w-full justify-center text-sm py-3 font-bold"
            >
              {t.modal.submit}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
