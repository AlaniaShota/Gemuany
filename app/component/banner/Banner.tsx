"use client"
import BannerText from './component/BannerText';
import BannerImg from './component/BannerImg';
import { Variants } from 'framer-motion';
import { StaticImageData } from 'next/image';
import { usePathname } from 'next/navigation';

interface BannerProps {
    title: string,
    description: string,
    aboutBtn?: string,
    readMoreBtn?:string,
    img: string | StaticImageData,
    animation: Variants,
    styleTextTitle?:string,
    styleTextAbout?:string,
    isAboutPage?: boolean,
    contactPageUrl?:string
    menuPageUrl?:string
}

const Banner: React.FC<BannerProps> = ({ title, description, aboutBtn, readMoreBtn, img, animation, styleTextTitle,  styleTextAbout }) => {
    const pathname = usePathname();

    const isAboutPage = pathname === '/about';
    const isMenuPage = pathname === '/menu'
    // const contactPageUrl = '/contact'; 
    // const menuPageUrl = '/menu'; 

    return (
          <div
           className={`${isAboutPage ? 'mt-0' : 'my-20'} relative flex justify-between items-start w-4/5  mx-auto`}>
            {isAboutPage ? (
              <div className="absolute inset-0 flex items-start justify-center w-full h-full">
                <BannerText isAboutPage={isAboutPage} title={title} description={description} animation={animation} styleTextTitle={styleTextTitle} styleTextAbout={styleTextAbout}/>
              </div>
            ) : (<BannerText   
                    title={title} 
                    description={description} 
                    aboutBtn={aboutBtn} 
                    readMoreBtn={readMoreBtn} 
                    animation={animation} 
                    styleTextTitle={styleTextTitle} 
                    styleTextAbout={styleTextAbout} 
                    // contactPageUrl={contactPageUrl}
                    // menuPageUrl={menuPageUrl}
                    />
            )}
                <BannerImg img={img} animation={animation}/>
        </div>
    );
};

export default Banner;
