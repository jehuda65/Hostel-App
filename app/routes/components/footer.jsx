export default function Footer() {
    return(

        <div className="bg-main py-14">
            <div className="flex flex-col items-center space-y-10 md:flex-row place-content-around space-x-7 md:mx-24">
                <div>
                    <img className="max-h-16" src="/img/logo-footer-left.png" alt="" />
                </div>
                <div className="flex flex-col">
                    <h3>CONTACT</h3>
                    <p>49a Mowbray Road HA8 8TR Edgware London</p>
                    <p>0203 30 20 110</p>
                    <p>info@pandacoaches.co.uk</p>

                </div>
                <div>
                    <img className="max-h-14" src="/img/logo-footer-right.png" alt="" />
                </div>
            </div>

        </div>
    )
}