import { RegisterButton } from '../header/style'
import ImageBanner from './../../assets/image-banner.png'

export default function Our(){
    return(
        <section className='container-our'>
            <img data-initial="left-loading" src={ImageBanner} alt="" />
            <div data-initial="down-loading" className="subcontainer-problems">
                <h2>Our Services</h2>
                <span>Explore our range of services, from inventory management to order integration. All designed to streamline your B2B processes.</span>
                <span>Discover all integrations we have and which is better for your business</span>
                <RegisterButton>Register Now</RegisterButton>
            </div>
        </section>
    )
}