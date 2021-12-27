import React from 'react'
import TimelineItem from '../TimelineItem/TimelineItem'
import { TimelineProgress } from '../TimelineProgress/TimelineProgress'

export default function Timeline() {
    return (
        <>
            <div className='timeline'>
                <TimelineProgress progressHeight='20' />
                <TimelineItem 
                    margin='ml-auto'
                    indicatorPosition='timeline-item-indicator-left'
                    indicatorStatus='active'
                    title='JOIN THE WONDERGAME!'
                    description='10,000 Wonderland NFTS will be released for minting. Claim your
                        unique White Rabbit, or try your luck randomly minting a rare Mad Hatter. Drawn by
                        some of the blockchain’s most expensive NFT artists, these are sought after
                        collectors items.' />
                <TimelineItem 
                    margin='mr-auto'
                    indicatorPosition='timeline-item-indicator-right'
                    indicatorStatus='active'
                    title='JOIN THE WONDERGAME!'
                    description='10,000 Wonderland NFTS will be released for minting. Claim your
                        unique White Rabbit, or try your luck randomly minting a rare Mad Hatter. Drawn by
                        some of the blockchain’s most expensive NFT artists, these are sought after
                        collectors items.' />
                <TimelineItem 
                    margin='ml-auto'
                    indicatorPosition='timeline-item-indicator-left'
                    title='JOIN THE WONDERGAME!'
                    description='10,000 Wonderland NFTS will be released for minting. Claim your
                        unique White Rabbit, or try your luck randomly minting a rare Mad Hatter. Drawn by
                        some of the blockchain’s most expensive NFT artists, these are sought after
                        collectors items.' />
                <TimelineItem 
                    margin='mr-auto'
                    indicatorPosition='timeline-item-indicator-right'
                    title='JOIN THE WONDERGAME!'
                    description='10,000 Wonderland NFTS will be released for minting. Claim your
                        unique White Rabbit, or try your luck randomly minting a rare Mad Hatter. Drawn by
                        some of the blockchain’s most expensive NFT artists, these are sought after
                        collectors items.' />
                <TimelineItem 
                    margin='ml-auto'
                    indicatorPosition='timeline-item-indicator-left'
                    title='JOIN THE WONDERGAME!'
                    description='10,000 Wonderland NFTS will be released for minting. Claim your
                        unique White Rabbit, or try your luck randomly minting a rare Mad Hatter. Drawn by
                        some of the blockchain’s most expensive NFT artists, these are sought after
                        collectors items.' />
                <TimelineItem 
                    margin='mr-auto'
                    indicatorPosition='timeline-item-indicator-right'
                    title='JOIN THE WONDERGAME!'
                    description='10,000 Wonderland NFTS will be released for minting. Claim your
                        unique White Rabbit, or try your luck randomly minting a rare Mad Hatter. Drawn by
                        some of the blockchain’s most expensive NFT artists, these are sought after
                        collectors items.' />
                <TimelineItem 
                    margin='ml-auto'
                    indicatorPosition='timeline-item-indicator-left'
                    title='JOIN THE WONDERGAME!'
                    description='10,000 Wonderland NFTS will be released for minting. Claim your
                        unique White Rabbit, or try your luck randomly minting a rare Mad Hatter. Drawn by
                        some of the blockchain’s most expensive NFT artists, these are sought after
                        collectors items.' />
                <TimelineItem 
                    margin='mr-auto'
                    indicatorPosition='timeline-item-indicator-right'
                    title='JOIN THE WONDERGAME!'
                    description='10,000 Wonderland NFTS will be released for minting. Claim your
                        unique White Rabbit, or try your luck randomly minting a rare Mad Hatter. Drawn by
                        some of the blockchain’s most expensive NFT artists, these are sought after
                        collectors items.' />
            </div>
        </>
    )
}
