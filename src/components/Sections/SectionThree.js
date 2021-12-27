import React from 'react';
import { Card } from '../Card/Card';
import Footer from '../Footer/Footer';
import { Button } from '../LinkButton/LinkButton';
import TeamCards from '../TeamCards/TeamCards';
import Timeline from '../Timeline/Timeline';


export default function SectionThree() {
    return (
        <>
            <div className='section-3 secondary-gradient wf-section'>
                <div className='container w-container'>
                    <h2 className='heading heading-white h1 text-center'>OUR TEAM</h2>
                    <TeamCards />
                    <Card cardStyle={'card-md'} cardMargin={'mb-30'}>
                        <h2 className='heading h1 text-center'>ROADMAP</h2>
                        <Timeline />
                        <div className='text-center'>
                            <Button link='/'><div>Join Whitelist</div></Button>
                        </div>
                        <div className='shape shape-12'>
                            <img src={'./61c9b27283c49a07484a1ebf_Group 237.png'} alt='' />
                        </div>
                        <div className='shape shape-13'>
                            <img src={'./61c9b2f8b80ffabdb9b49722_Group 235.png'} alt='' />
                        </div>
                    </Card>
                    <Card cardStyle={'card-lg'} cardMargin={'mb-96'}>
                        <h2 className='heading h1 text-center'>LONG TERM APPLICATION</h2>
                        <div class="div-block-10">
                            <p class="paragraph">
                                Our vision is to create a real-world utility template for metaverses, with
                                community at its core. By continuing to incorporate a wide array of projects into our world,
                                we aim to provide communities with the tools to build and create their own spaces inside the
                                Wonderverse<br /><br />.Land can be used to host a wide array of things; a custom realm,
                                business, fanclub, hang-out, Shop, gaming complex or community. DeFi Projects could buy land
                                to integrate with their protocol via a Bank or Shop. NFT projects could build art galleries.
                                Land Owners can host their own education or social events, and even live metaverse concerts
                                with your favourite musician.<br /><br />Businesses can be either completely in the
                                Wonderverse, or also in the physical world with our enterprise partners. Businesses in the
                                Wonderverse could be types such as Nightclubs, Bars, Vendors, Galleries, Game Hosts, and
                                Stores. Physical-world businesses hosted within the Metaverse could be your favorite
                                National Sports Club, Services Provider, or Merchant. Imagine buying a new in-game NFT Watch
                                for your character, and having the physically-backed item appear at your door to wear in
                                real life… Ooh the delight!<br /><br />Our Wonderverse can host NFT projects, quests,
                                storylines, items, and smart contracts. The goal is to partner with other projects for
                                strategic value to both. We collaborate with important collections, projects or businesses
                                more extensively via dedicated buildings, quests, and community events.Users can bookmark
                                their favourite locations within the Wonderland Metaverse to return to later. Using the DeFi
                                Wonderland partnered DeFi Link payment gateway and enterprise integrations, users will be
                                able to use the map to visit a physical store virtually, and make purchases online using
                                crypto.<br /><br />As global Metaverse VR technology develops, DeFi Wonderland aims to
                                integrate completely into this decentralized world to allow for users to enter the
                                Wonderverse through VR, interact and enter various games, trade, earn, and build their own
                                empire as they build the DeFi wealth.
                            </p>
                        </div>
                    </Card>
                    <Footer />
                </div>

                <div className='shape shape-9'>
                    <img src={'./61c9b142f0e447e66583658e_20.png'} alt='' />
                </div>
                <div className='shape shape-15'>
                    <img src={'./61c99e539ca45643ff9cbb93_4.png'} alt='' />
                </div>
                <div className='shape shape-10'>
                    <img src={'./61c9b1990344d15525deaafb_Mask Group (3).png'} alt='' />
                </div>
                <div className='shape shape-11'>
                    <img src={'./61c9b1eb1e48c40c2f1a1d90_Group 1158.png'} alt='' />
                </div>
                <div className='shape shape-14'>
                    <img src={'./61c9b3769ca45660d89d6507_Group 233.png'} alt='' className='image-3' />
                </div>
            </div>
        </>
    )
}
