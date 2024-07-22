import clsx from "clsx"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { motion, Variants } from 'framer-motion'

export default function({
    showMobileNav,
    onShowMobileNav,
}: {
    showMobileNav?: any
    onShowMobileNav?: any
}) {
    const mobileNav = {
        show: {
            width: '80%',
            transition: {
                duration: .2,
                when: 'beforeChildren',
                staggerChildren: .05,
            }
        },
        hide: {
            width: 0,
            transition: {
                duration: .2,
                when: 'afterChildren',
            }
        }
    }
    const item = {
        show: {
            opacity: 1,
            y: 0,
        },
        hide: {
            opacity: 0,
            y: 25,
            transition: {
                duration: .2
            }
        },
    }

    return (
        <motion.div
            initial={false}
            animate={showMobileNav ? 'show' : 'hide'}
            variants={mobileNav}
            className={clsx(
                // Layout
                'fixed inset-x-0 inset-y-0 z-50 overflow-hidden',
                // Sizing
                'h-screen 0 sm:w-96',
                // Spacing
                'space-y-4 py-12',
                // Background
                'bg-white',
                // Typography
                'text-2xl',
                // {
                //     'hidden': showMobileNav === false
                // }
            )}
        >
            <div className={clsx(
                    // Layout & Sizing
                    'w-5/6',
                    // Spacing
                    'mx-auto space-y-4',
                    '',
                    '',
                    '',
                    // Flex
                    'flex flex-col',
                    ''
                )}
            >
                <motion.div 
                    variants={item}
                    className='flex justify-end'
                >
                    <XMarkIcon className='h-6 cursor-pointer' onClick={onShowMobileNav} />
                </motion.div>
                <motion.div variants={item}>
                    <Link href='/collections/latest'>NEW</Link>
                </motion.div>
                <motion.div variants={item}>
                    <Link href='/collections/tees'>TEES</Link>
                </motion.div>
                <motion.div variants={item}>
                    <Link href='/collections/pants'>PANTS</Link>
                </motion.div>
                <motion.div variants={item}>
                    <Link href='/collections/shorts'>SHORTS</Link>
                </motion.div>
                <motion.div variants={item}>
                    <Link href='/login'>Log in</Link>
                </motion.div>
                <motion.div
                    variants={item}
                    className="flex justify-evenly"
                >
                    <div className="border py-4 px-8">
                        <Link href={'instagram.com'}>
                            <svg className='h-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'/></svg>
                        </Link>
                    </div>
                    <div className="border py-4 px-8">
                        <Link href={'facebook.com'}>
                            <svg className='h-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z'/></svg>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}