import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';

const Products = () => {
    const t = useTranslations('products');

    const categoryKeys = [
        'art', 'books', 'kitchen', 'game',
        'gardening', 'music', 'pets', 'photography',
        'sports', 'toys'
    ];

    const colorMap: Record<string, string> = {
        art: '#ED5625',
        books: '#55B4E5',
        kitchen: '#FBB338',
        game: '#ED5625',
        gardening: '#55B4E5',
        music: '#FBB338',
        pets: '#ED5625',
        photography: '#55B4E5',
        sports: '#FBB338',
        toys: '#ED5625'
    };

    const bgMap: Record<string, string> = {
        art: 'from-orange-400 to-red-500',
        books: 'from-blue-400 to-blue-600',
        kitchen: 'from-yellow-400 to-orange-400',
        game: 'from-red-400 to-pink-500',
        gardening: 'from-green-400 to-teal-500',
        music: 'from-purple-400 to-indigo-500',
        pets: 'from-yellow-400 to-orange-500',
        photography: 'from-gray-400 to-blue-500',
        sports: 'from-orange-400 to-red-500',
        toys: 'from-pink-400 to-purple-500'
    };

    const products = categoryKeys.map((key) => ({
        id: key,
        icon: t(`categories.${key}.icon`),
        name: t(`categories.${key}.name`),
        color: colorMap[key],
        bgGradient: bgMap[key],
        hover: `group-hover:${bgMap[key]}`
    }));

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20
            }
        }
    };

    return (
        <section
            id="products"
            className="py-24 relative overflow-hidden bg-gradient-to-b from-[#ED5625] via-[#FBB338] to-[#55B4E5]"
        >
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-white to-yellow-100 bg-clip-text mb-4 relative inline-block">
                        {t('section.title')}
                        <motion.div
                            className="absolute -bottom-2 left-0 right-0 h-1 bg-[#55B4E5] rounded-full"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        />
                    </h2>
                    <p className="text-xl text-yellow-100 max-w-2xl mx-auto mt-6">
                        {t('section.subtitle')}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                transition: { type: 'spring', stiffness: 400, damping: 15 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative">
                                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50 group-hover:bg-white/90">
                                    <div className="relative mb-4">
                                        <div
                                            className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-4xl relative overflow-hidden group-hover:scale-110 transition-transform duration-300"
                                            style={{
                                                background: `linear-gradient(135deg, ${product.color}15, ${product.color}25)`
                                            }}
                                        >
                                            <motion.div
                                                className={`absolute inset-0 bg-gradient-to-r ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                                initial={false}
                                            />
                                            <span className="relative z-50 group-hover:scale-110 transition-transform duration-300">
                                                {product.icon}
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className={`text-center bg-gradient-to-r from-gray-800 to-gray-800 bg-clip-text ${product.hover} my-2 text-lg font-semibold text-transparent transition-colors duration-300 relative z-10`}>
                                        {product.name}
                                    </h3>
                                </div>
                                <div
                                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                                    style={{
                                        background: `linear-gradient(135deg, ${product.color}, ${product.color}88)`
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Products;
