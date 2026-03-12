'use client';

import Image from 'next/image';
import { 
  Printer, 
  ChevronDown, 
  ChevronUp,
  Eye, 
  ArrowLeft,
  Calendar,
  XCircle,
  AlertTriangle,
  CheckCircle2,
  UserX,
  Globe
} from 'lucide-react';
import { useState, useEffect } from 'react';

const translations = {
  ar: {
    bookingDetails: 'بيانات الحجز',
    printPage: 'اطبع هذه الصفحة',
    bookingActions: 'الإجراءات الخاصة بالحجز',
    changeDates: 'تغيير تواريخ وأسعار الحجز',
    cancelBooking: 'طلب إلغاء الحجز',
    reportNoShow: 'أبلغ عن عدم الحضور',
    payment: 'الدفع',
    noCreditCardNeeded: 'لا حاجة إلى بطاقة ائتمانية',
    creditCardNotRequired: 'البطاقة الائتمانية غير مطلوبة لهذا الحجز، بناءً على',
    creditCardExceptions: 'الحالات الاستثنائية للبطاقة الائتمانية',
    yours: 'لديك.',
    guestPayments: 'مدفوعات الضيوف',
    selectPaymentStatus: '-- اختر حالة الدفع --',
    fullyPaid: 'مدفوع بالكامل',
    partiallyPaid: 'مدفوع جزئي',
    unpaid: 'غير مدفوع',
    problems: 'المشاكل',
    reportMisconduct: 'الإبلاغ عن سوء سلوك الضيف',
    guestName: 'اسم الضيف:',
    saudiArabia: 'المملكة العربية السعودية',
    preferredLanguage: 'اللغة المفضلة:',
    arabic: 'العربية',
    bookingMethod: 'طريقة الحجز:',
    bookingNumber: 'رقم الحجز:',
    status: 'الحالة:',
    received: 'تم الاستلام',
    notesInternal: 'الملاحظات (داخلية فقط):',
    date1: 'الخميس، 5 مارس 2026',
    addNotesHere: 'أضف ملاحظاتك هنا',
    iataCode: 'رمز IATA/TIDS:',
    checkIn: 'تسجيل الوصول',
    from: 'من 14:00',
    checkOut: 'تسجيل المغادرة',
    date2: 'الجمعة، 6 مارس 2026',
    until: 'حتى 12:00',
    lengthOfStay: 'مدة الإقامة:',
    oneNight: 'ليلة واحدة',
    totalGuests: 'إجمالي عدد الضيوف:',
    twoAdults: 'شخصان بالغان',
    totalUnits: 'العدد الإجمالي للوحدات:',
    totalPrice: 'السعر الإجمالي',
    commissionableAmount: 'المبلغ الذي تطبق عليه العمولة:',
    commission: 'العمولة:',
    roomPolicies: 'سياسات الغرفة (غرفة مزدوجة)',
    cancellation: 'إلغاء الحجز',
    cancellationPolicy: 'سيتم الخصم من الضيف سعر الحجز الإجمالي إذا قام بإلغاء حجزه في أي وقت.',
    noShowPolicy: 'سياسة عدم الحضور',
    noShowPolicyText: 'إذا لم يحضر الضيف، سيتم الخصم منه سعر الحجز الإجمالي.',
    prepayment: 'دفع مسبق',
    prepaymentPolicy: 'سيتم خصم دفعة مسبقة من الضيف بما يساوي قيمة سعر الحجز الإجمالي في أي وقت.',
    damagePolicy: 'خيار سياسة الأضرار',
    damagePolicyText: 'لا يدفع ضيوفك وديعة ضد الأضرار.',
    internet: 'الإنترنت',
    internetPolicy: 'تتوفر خدمة الواي فاي (الإنترنت اللاسلكي)،في جميع أنحاء الفندق مجاناً.',
    childrenPolicy: 'السياسة المتعلِّقة بالأطفال والأسرَّة الإضافية',
    childrenPolicyText1: 'يُسمح بالأطفال بغض النظر عن العمر.',
    childrenPolicyText2: 'لم تقم بإضافة أي أسرّة للأطفال.',
    childrenPolicyText3: 'لم تقم بإضافة أي أسرّة إضافية.',
    childrenPolicyText4: 'الحد الأقصى لعدد الضيوف الإجمالي هو 2.',
    parking: 'مواقف للسيارات',
    parkingPolicy: 'يتوفر موقف مجاني و عام للسيارت في مكان قريب من الفندق (لا يُطلب الحجز المسبق).',
    pets: 'الحيوانات الأليفة',
    petsPolicy: 'الحيوانات الأليفة غير مسموح بها',
    groups: 'المجموعات',
    groupsPolicy: 'عند الحجز لأكثر من 5 غرف قد تنطبق سياسات مختلفة وملاحق إضافية.',
    changeDatesTitle: 'تغيير التواريخ',
    changeDatesText: 'هذه الميزة غير متاحة حالياً في النسخة التجريبية. في النظام الحقيقي، ستظهر نافذة تقويم لتعديل الحجز.',
    close: 'إغلاق',
    updateDates: 'تحديث التواريخ',
    cancelBookingTitle: 'إلغاء الحجز',
    cancelBookingText: 'هل أنت متأكد من رغبتك في إلغاء هذا الحجز؟ سيتم تطبيق سياسة الإلغاء الموضحة في تفاصيل الحجز.',
    back: 'تراجع',
    confirmCancel: 'تأكيد الإلغاء',
    reportMisconductTitle: 'الإبلاغ عن سوء سلوك',
    reportMisconductText: 'يرجى تحديد نوع سوء السلوك الذي تود الإبلاغ عنه:',
    vandalism: 'تخريب الممتلكات',
    disturbance: 'إزعاج الضيوف الآخرين',
    nonPayment: 'عدم الدفع',
    other: 'أخرى',
    additionalDetails: 'تفاصيل إضافية...',
    cancel: 'إلغاء',
    submitReport: 'إرسال التقرير',
    langToggle: 'EN'
  },
  en: {
    bookingDetails: 'Booking Details',
    printPage: 'Print this page',
    bookingActions: 'Booking Actions',
    changeDates: 'Change dates & prices',
    cancelBooking: 'Request to cancel',
    reportNoShow: 'Report a no-show',
    payment: 'Payment',
    noCreditCardNeeded: 'No credit card needed',
    creditCardNotRequired: 'Credit card is not required for this booking, based on your',
    creditCardExceptions: 'credit card exceptions',
    yours: '.',
    guestPayments: 'Guest payments',
    selectPaymentStatus: '-- Select payment status --',
    fullyPaid: 'Fully Paid',
    partiallyPaid: 'Partially Paid',
    unpaid: 'Unpaid',
    problems: 'Problems',
    reportMisconduct: 'Report guest misconduct',
    guestName: 'Guest Name:',
    saudiArabia: 'Saudi Arabia',
    preferredLanguage: 'Preferred Language:',
    arabic: 'Arabic',
    bookingMethod: 'Booking Method:',
    bookingNumber: 'Booking Number:',
    status: 'Status:',
    received: 'Received',
    notesInternal: 'Notes (internal only):',
    date1: 'Thursday, 5 March 2026',
    addNotesHere: 'Add your notes here',
    iataCode: 'IATA/TIDS Code:',
    checkIn: 'Check-in',
    from: 'from 14:00',
    checkOut: 'Check-out',
    date2: 'Friday, 6 March 2026',
    until: 'until 12:00',
    lengthOfStay: 'Length of stay:',
    oneNight: '1 night',
    totalGuests: 'Total guests:',
    twoAdults: '2 adults',
    totalUnits: 'Total units:',
    totalPrice: 'Total Price',
    commissionableAmount: 'Commissionable amount:',
    commission: 'Commission:',
    roomPolicies: 'Room Policies (Double Room)',
    cancellation: 'Cancellation',
    cancellationPolicy: 'The guest will be charged the total price of the reservation if they cancel at any time.',
    noShowPolicy: 'No-show policy',
    noShowPolicyText: 'If the guest doesn\'t show up, they will be charged the total price of the reservation.',
    prepayment: 'Prepayment',
    prepaymentPolicy: 'The guest will be charged a prepayment of the total price of the reservation at any time.',
    damagePolicy: 'Damage policy option',
    damagePolicyText: 'Your guests do not pay a damage deposit.',
    internet: 'Internet',
    internetPolicy: 'WiFi is available in all areas and is free of charge.',
    childrenPolicy: 'Children and extra bed policy',
    childrenPolicyText1: 'Children of any age are allowed.',
    childrenPolicyText2: 'You haven\'t added any cots.',
    childrenPolicyText3: 'You haven\'t added any extra beds.',
    childrenPolicyText4: 'The maximum number of total guests is 2.',
    parking: 'Parking',
    parkingPolicy: 'Free public parking is possible at a location nearby (reservation is not needed).',
    pets: 'Pets',
    petsPolicy: 'Pets are not allowed.',
    groups: 'Groups',
    groupsPolicy: 'When booking more than 5 rooms, different policies and additional supplements may apply.',
    changeDatesTitle: 'Change Dates',
    changeDatesText: 'This feature is currently unavailable in the demo. In a real system, a calendar window would appear to modify the booking.',
    close: 'Close',
    updateDates: 'Update Dates',
    cancelBookingTitle: 'Cancel Booking',
    cancelBookingText: 'Are you sure you want to cancel this booking? The cancellation policy outlined in the booking details will apply.',
    back: 'Back',
    confirmCancel: 'Confirm Cancellation',
    reportMisconductTitle: 'Report Misconduct',
    reportMisconductText: 'Please select the type of misconduct you would like to report:',
    vandalism: 'Vandalism',
    disturbance: 'Disturbing other guests',
    nonPayment: 'Non-payment',
    other: 'Other',
    additionalDetails: 'Additional details...',
    cancel: 'Cancel',
    submitReport: 'Submit Report',
    langToggle: 'AR'
  }
};

type Language = 'ar' | 'en';

export default function BookingPage() {
  const [isPoliciesOpen, setIsPoliciesOpen] = useState(true);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [lang, setLang] = useState<Language>('ar');

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const handlePrint = () => {
    window.print();
  };

  const openModal = (modalName: string) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 max-w-7xl mx-auto font-sans text-[#1a1a1a]">
      <header className="mb-6 flex justify-between items-center print:hidden">
        <h1 className="text-2xl font-bold text-gray-900">{t.bookingDetails}</h1>
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
        >
          <Globe size={16} />
          {t.langToggle}
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Sidebar (Green Box Area) */}
        <aside className="lg:col-span-3 space-y-4 print:hidden">
          
          {/* Main Actions Card */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-sm p-4 space-y-4">
            <button 
              onClick={handlePrint}
              className="w-full flex items-center justify-center gap-2 text-[#006CE4] font-bold border border-[#006CE4] rounded-sm py-2 hover:bg-[#F0F6FD] transition-colors text-xs"
            >
              <Printer size={16} />
              <span>{t.printPage}</span>
            </button>

            <div className="border-t border-gray-100 pt-4 space-y-3">
              <h2 className="font-bold text-gray-900 text-lg">{t.bookingActions}</h2>
              
              <button 
                onClick={() => openModal('changeDates')}
                className={`w-full py-1.5 px-2 text-[#006CE4] hover:bg-[#F0F6FD] hover:text-[#004cb0] rounded-sm transition-colors text-[11px] font-medium flex items-center gap-2 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
              >
                <Calendar size={14} />
                <span>{t.changeDates}</span>
              </button>
              
              <button 
                onClick={() => openModal('cancelBooking')}
                className={`w-full py-1.5 px-2 text-[#006CE4] hover:bg-[#F0F6FD] hover:text-[#004cb0] rounded-sm transition-colors text-[11px] font-medium flex items-center gap-2 ${lang === 'ar' ? 'text-right' : 'text-left'}`}
              >
                <XCircle size={14} />
                <span>{t.cancelBooking}</span>
              </button>
              
              <button disabled className={`w-full py-1.5 px-2 text-gray-400 cursor-not-allowed rounded-sm text-[11px] font-medium flex items-center gap-2 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                <UserX size={14} />
                <span>{t.reportNoShow}</span>
              </button>
            </div>
          </div>

          {/* Payment Card */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-sm p-4 space-y-4">
            <div>
              <h2 className="font-bold text-gray-900 text-lg mb-3">{t.payment}</h2>
              <div className="bg-[#F2F2F2] px-2 py-1.5 rounded-sm inline-block mb-3">
                <span className="text-[10px] font-bold text-gray-700">{t.noCreditCardNeeded}</span>
              </div>
              <p className="text-[10px] text-gray-600 leading-relaxed">
                {t.creditCardNotRequired} <a href="#" className="text-[#006CE4] hover:underline">{t.creditCardExceptions}</a> {t.yours}
              </p>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <h2 className="font-bold text-gray-900 text-lg mb-2">{t.guestPayments}</h2>
              <div className="relative">
                <select 
                  value={paymentStatus}
                  onChange={(e) => setPaymentStatus(e.target.value)}
                  className={`w-full p-2 border border-gray-300 rounded-sm text-[11px] appearance-none bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#006CE4] ${lang === 'ar' ? 'pr-8 pl-2' : 'pl-2 pr-8'}`}
                >
                  <option value="">{t.selectPaymentStatus}</option>
                  <option value="fully_paid">{t.fullyPaid}</option>
                  <option value="partially_paid">{t.partiallyPaid}</option>
                  <option value="unpaid">{t.unpaid}</option>
                </select>
                <ChevronDown className={`absolute top-2.5 text-gray-500 pointer-events-none ${lang === 'ar' ? 'left-2' : 'right-2'}`} size={14} />
              </div>
            </div>
          </div>

          {/* Problems Card */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-sm p-4">
            <h2 className="font-bold text-gray-900 text-lg mb-3">{t.problems}</h2>
            <button 
              onClick={() => openModal('reportMisconduct')}
              className="w-full py-2 px-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-sm transition-colors text-[11px] font-medium flex items-center justify-center gap-2"
            >
              <AlertTriangle size={14} className="text-orange-500" />
              <span>{t.reportMisconduct}</span>
            </button>
          </div>

        </aside>

        {/* Main Content (Red Box Area) */}
        <main className="lg:col-span-9 space-y-6">
          
          {/* Main Booking Card */}
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden print:shadow-none print:border-none">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-10">
                
                {/* Guest Info Section */}
                <div className={`flex-1 space-y-8 ${lang === 'ar' ? 'md:border-l md:border-gray-200 md:pl-10' : 'md:border-r md:border-gray-200 md:pr-10'}`}>
                  
                  {/* Header: Name & Genius */}
                  <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                    <p className="text-sm text-gray-500 mb-1.5">{t.guestName}</p>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-3xl font-bold text-gray-900">سلمان معافا</h2>
                      <span className="bg-[#003580] text-[#FFD900] text-xs font-bold px-2 py-0.5 rounded-sm">Genius</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-medium uppercase">sa</span>
                      <div className="relative w-6 h-4 shadow-sm">
                        <Image 
                          src="https://flagcdn.com/w20/sa.png" 
                          alt="Saudi Arabia" 
                          fill
                          className="object-cover rounded-sm"
                        />
                      </div>
                      <span className="font-medium text-gray-900">{t.saudiArabia}</span>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className={`space-y-2 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    <a href="mailto:smf.338217@guest.booking.com" className={`text-[#006CE4] font-bold text-base hover:underline dir-ltr block w-fit ${lang === 'ar' ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
                      smf.338217@guest.booking.com
                    </a>
                    <div className="mt-1">
                      <span className="text-gray-900 font-medium text-base inline-block" dir="ltr">
                        +966 50 123 4567
                      </span>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className={`grid grid-cols-[auto_1fr] gap-x-8 gap-y-4 text-sm border-t border-gray-100 pt-6 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    <span className="text-gray-500">{t.preferredLanguage}</span>
                    <span className="font-bold text-gray-900">{t.arabic}</span>

                    <span className="text-gray-500">{t.bookingMethod}</span>
                    <span className="font-bold text-gray-900">Booking.com</span>

                    <span className="text-gray-500">{t.bookingNumber}</span>
                    <span className="font-bold text-gray-900 font-mono text-base">5504099722</span>

                    <span className="text-gray-500">{t.status}</span>
                    <span className="font-bold text-gray-900">{t.received}</span>

                    <span className="text-gray-500 self-start pt-1">{t.notesInternal}</span>
                    <div className="space-y-1.5">
                      <span className="font-bold text-gray-900 block">{t.date1}</span>
                      <button className="text-[#006CE4] font-bold text-sm hover:underline">{t.addNotesHere}</button>
                    </div>
                  </div>
                  
                   <div className="flex justify-between items-center text-sm pt-4 border-t border-gray-100 mt-4">
                      <span className="text-gray-500">{t.iataCode}</span>
                      <span className="font-bold text-gray-900 font-mono text-base">PC029090</span>
                    </div>
                </div>

                {/* Dates & Price Section */}
                <div className="flex-1 flex flex-col justify-between">
                  
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div className={`${lang === 'ar' ? 'text-right border-l pl-6' : 'text-left border-r pr-6'} border-gray-200`}>
                      <p className="text-sm text-gray-500 mb-2">{t.checkIn}</p>
                      <p className="text-xl font-extrabold text-gray-900 mb-1">{t.date1}</p>
                      <p className="text-sm text-gray-500">{t.from}</p>
                    </div>
                    <div className={`${lang === 'ar' ? 'text-right pr-2' : 'text-left pl-2'}`}>
                      <p className="text-sm text-gray-500 mb-2">{t.checkOut}</p>
                      <p className="text-xl font-extrabold text-gray-900 mb-1">{t.date2}</p>
                      <p className="text-sm text-gray-500">{t.until}</p>
                    </div>
                  </div>

                  <div className="space-y-4 border-t border-gray-100 pt-6">
                    <div className="flex justify-between items-center text-base">
                      <span className="text-gray-600">{t.lengthOfStay}</span>
                      <span className="font-bold text-gray-900">{t.oneNight}</span>
                    </div>
                    <div className="flex justify-between items-center text-base">
                      <span className="text-gray-600">{t.totalGuests}</span>
                      <span className="font-bold text-gray-900">{t.twoAdults}</span>
                    </div>
                    <div className="flex justify-between items-center text-base">
                      <span className="text-gray-600">{t.totalUnits}</span>
                      <span className="font-bold text-gray-900 text-xl">1</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-8 border-t border-gray-100">
                    <div className="flex justify-between items-end mb-4">
                      <span className="text-gray-900 font-bold text-xl">{t.totalPrice}</span>
                      <span className="text-5xl font-extrabold text-gray-900 tracking-tight">SAR 735.79</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex justify-between items-center">
                        <span>{t.commissionableAmount}</span>
                        <span className="font-medium text-gray-700">SAR 588.63</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>{t.commission}</span>
                        <span className="font-medium text-gray-700">SAR 117.73</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Room Details Bar (Collapsible) */}
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
            <button 
              onClick={() => setIsPoliciesOpen(!isPoliciesOpen)}
              className="w-full p-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                {isPoliciesOpen ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
                <h3 className="text-lg font-bold text-gray-900">{t.roomPolicies}</h3>
              </div>
            </button>
            
            {/* Policies Section (Collapsible Content) */}
            {isPoliciesOpen && (
              <div className="border-t border-gray-200 p-6 bg-white animate-in slide-in-from-top-2 duration-200">
                <div className="space-y-0 divide-y divide-gray-100">
                  <PolicyRow 
                    label={t.cancellation} 
                    value={t.cancellationPolicy} 
                    lang={lang}
                  />
                  <PolicyRow 
                    label={t.noShowPolicy} 
                    value={t.noShowPolicyText} 
                    lang={lang}
                  />
                  <PolicyRow 
                    label={t.prepayment} 
                    value={t.prepaymentPolicy} 
                    lang={lang}
                  />
                  <PolicyRow 
                    label={t.damagePolicy} 
                    value={t.damagePolicyText} 
                    lang={lang}
                  />
                  <PolicyRow 
                    label={t.internet} 
                    value={t.internetPolicy} 
                    lang={lang}
                  />
                  <PolicyRow 
                    label={t.childrenPolicy} 
                    value={
                      <div className="space-y-1.5">
                        <p>{t.childrenPolicyText1}</p>
                        <p>{t.childrenPolicyText2}</p>
                        <p>{t.childrenPolicyText3}</p>
                        <p className="font-medium">{t.childrenPolicyText4}</p>
                      </div>
                    } 
                    lang={lang}
                  />
                  <PolicyRow 
                    label={t.parking} 
                    value={t.parkingPolicy} 
                    lang={lang}
                  />
                  <PolicyRow 
                    label={t.pets} 
                    value={t.petsPolicy} 
                    lang={lang}
                  />
                  <PolicyRow 
                    label={t.groups} 
                    value={t.groupsPolicy} 
                    lang={lang}
                  />
                </div>
              </div>
            )}
          </div>

        </main>
      </div>

      {/* Modals */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 animate-in zoom-in-95 duration-200">
            {activeModal === 'changeDates' && (
              <>
                <div className="flex items-center gap-3 mb-4 text-[#006CE4]">
                  <Calendar size={24} />
                  <h3 className="text-lg font-bold">{t.changeDatesTitle}</h3>
                </div>
                <p className="text-gray-600 mb-6">{t.changeDatesText}</p>
                <div className="flex justify-end gap-2">
                  <button onClick={closeModal} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 font-medium">{t.close}</button>
                  <button onClick={closeModal} className="px-4 py-2 bg-[#006CE4] text-white rounded-md hover:bg-[#0057b8] font-medium">{t.updateDates}</button>
                </div>
              </>
            )}

            {activeModal === 'cancelBooking' && (
              <>
                <div className="flex items-center gap-3 mb-4 text-red-600">
                  <XCircle size={24} />
                  <h3 className="text-lg font-bold">{t.cancelBookingTitle}</h3>
                </div>
                <p className="text-gray-600 mb-6">{t.cancelBookingText}</p>
                <div className="flex justify-end gap-2">
                  <button onClick={closeModal} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 font-medium">{t.back}</button>
                  <button onClick={closeModal} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 font-medium">{t.confirmCancel}</button>
                </div>
              </>
            )}

            {activeModal === 'reportMisconduct' && (
              <>
                <div className="flex items-center gap-3 mb-4 text-orange-600">
                  <AlertTriangle size={24} />
                  <h3 className="text-lg font-bold">{t.reportMisconductTitle}</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <p className="text-gray-600">{t.reportMisconductText}</p>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>{t.vandalism}</option>
                    <option>{t.disturbance}</option>
                    <option>{t.nonPayment}</option>
                    <option>{t.other}</option>
                  </select>
                  <textarea className="w-full p-2 border border-gray-300 rounded-md h-24" placeholder={t.additionalDetails}></textarea>
                </div>
                <div className="flex justify-end gap-2">
                  <button onClick={closeModal} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 font-medium">{t.cancel}</button>
                  <button onClick={closeModal} className="px-4 py-2 bg-[#006CE4] text-white rounded-md hover:bg-[#0057b8] font-medium">{t.submitReport}</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function PolicyRow({ label, value, lang }: { label: string, value: React.ReactNode, lang: Language }) {
  return (
    <div className="flex flex-col md:flex-row justify-between py-4 gap-4">
      <div className={`md:w-1/3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
        <span className="font-bold text-gray-900">{label}</span>
      </div>
      <div className={`md:w-2/3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
        <div className="text-gray-900">{value}</div>
      </div>
    </div>
  );
}

