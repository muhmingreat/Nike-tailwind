import { footerLogo } from '../assets/images'
import { socialMedia , footerLinks} from '../constants'

const Footer = () => {
  return (
    <footer className="max-container">
      <div
        className="flex justify-between items-start
      gap-20 flex-wrap max-lg:flex-col"
      >
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p
            className="mt-6 text-base leading-7
    font-montserrat text-white-400
    sm:max-w-sm"
          >
            Get Shoes ready for the new term at your nearest Nike store. Find
            Your your perfect SIze in Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-6 ">
            {socialMedia.map((icon) => (
              <div
                className="flex items-center justify-center gap-5 mt-8
       w-12 h-12 bg-white rounded-full "
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex flex-1 
    justify-between lg:gap-10
        gap-20 flex-wrap "
        >
          {footerLinks.map((footer) => (
            <div key={footer}>
              <h4
                className="text-white
              font-montserrat text-2xl leading-normal
              font-medium mb-6"
              >
                {footer.title}
              </h4>
              <ul>
                {footer.links.map((link) => (
                  <li className='mt-3 text-white-400
                  font-montserrat text-base leading-normal
                   cursor-pointer hover:text-[#00fd9a]'
                   key={link.name}
                   >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between
      text-white-400 mt-24
      max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1
        justify-start items-center gap-2 
        font-montserrat cursor-pointer'>
          <p> &copy;</p>
          <p>Copy Right all right reserved</p>
        </div>
        <p className='font-montserrat cursor-pointer'> Terms & Condition</p>
      </div>
    </footer>
  );
}

export default Footer