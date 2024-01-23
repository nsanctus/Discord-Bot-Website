
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Partnerlerimiz
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://codeshare.me">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/attachments/1147890782494281830/1199122123839512679/Redhookgaming.png?ex=65c16480&is=65aeef80&hm=aa884457b2ea8ee4421c7e6707028f37f0d2e8274a57ae66726b96ff0d497b03&" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">RedhookGaming</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                     Redhood .
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>


                            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://codeshare.me/partners/64db583a4292ca1066ad0a1b">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/attachments/1147890782494281830/1199120086544416859/Vuupee_Yuvarlak.png?ex=65c1629b&is=65aeed9b&hm=7ff094a4393681f87229afd16fb802539a0eb2f58d52d74e8b0d36bc2b9fd08d&" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Developer - Geliştirici</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                   NsSanctus - Talha Kaya
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};
