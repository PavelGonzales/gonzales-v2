import dayjs from 'dayjs';

export default [
  {
    companyName: 'MAGNIT',
    companyLogo: '/logos/magnit.svg',
    companyLink: 'https://www.magnit.tech/',
    companyLocation: 'Russia, Moscow',
    position: 'Dev Team Lead',
    startAt: dayjs('09/14/2022').format('MMMM YYYY'),
    endAt: 'now',
    duration: dayjs().diff(dayjs('09/14/2022'), 'months') + 1
  },
  {
    companyName: 'SoftPro',
    companyLogo: '/logos/softpro.svg',
    companyLink: 'https://softpro.com/',
    companyLocation: 'Russia, Moscow',
    position: 'Senior Front-end Developer',
    startAt: dayjs('09/04/2020').format('MMMM YYYY'),
    endAt: dayjs('07/26/2022').format('MMMM YYYY'),
    duration: dayjs('07/26/2022').diff(dayjs('09/04/2020'), 'months') + 1
  },
  {
    companyName: 'Cryptopay',
    companyLogo: '/logos/cryptopay.svg',
    companyLink: 'https://www.cryptopay.me',
    companyLocation: 'Russia, Moscow',
    position: 'Senior Front-end Developer',
    startAt: dayjs('06/01/2020').format('MMMM YYYY'),
    endAt: dayjs('09/01/2020').format('MMMM YYYY'),
    duration: dayjs('09/01/2020').diff(dayjs('06/01/2020'), 'months') + 1
  },
  {
    companyName: 'Rabota.ru',
    companyLogo: '/logos/rabotaru.svg',
    companyLink: 'https://www.rabota.ru',
    companyLocation: 'Russia, Moscow',
    position: 'Senior Front-end Developer',
    startAt: dayjs('01/20/2020').format('MMMM YYYY'),
    endAt: dayjs('06/10/2020').format('MMMM YYYY'),
    duration: dayjs('06/10/2020').diff(dayjs('01/20/2020'), 'months') + 1
  },
  {
    companyName: 'OZON',
    companyLogo: '/logos/ozon.svg',
    companyLink: 'https://www.ozon.ru',
    companyLocation: 'Russia, Moscow',
    position: 'Front-end Developer – Senior Front-end Developer',
    startAt: dayjs('03/21/2018').format('MMMM YYYY'),
    endAt: dayjs('01/10/2020').format('MMMM YYYY'),
    duration: dayjs('01/10/2020').diff(dayjs('03/21/2018'), 'months') + 1
  },
  {
    companyName: 'Beta Digital Production',
    companyLogo: '/logos/beta.svg',
    companyLink: 'https://betaagency.ru/',
    companyLocation: 'Russia, Moscow',
    position: 'Front-end developer',
    startAt: dayjs('10/10/2016').format('MMMM YYYY'),
    endAt: dayjs('03/16/2018').format('MMMM YYYY'),
    duration: dayjs('03/16/2018').diff(dayjs('10/10/2016'), 'months') + 1
  },
  {
    companyName: 'Freelancer',
    companyLink: '',
    companyLocation: 'Russia, Moscow',
    position: 'HTML-Coder / Project manager',
    startAt: dayjs('11/01/2015').format('MMMM YYYY'),
    endAt: dayjs('06/01/2016').format('MMMM YYYY'),
    duration: dayjs('06/01/2016').diff(dayjs('11/01/2015'), 'months') + 1
  }
]
