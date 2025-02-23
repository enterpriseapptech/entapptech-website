export const item = {
    hidden: {
        y: 70,
        opacity: 0,
        transition: {
            when: "afterChildren",
            duration: 0.5,
            repeat: 0,
        },
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.5,
            duration: 0.5,
            repeat: 0,
        },
    },
};


export const parentItem = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    variants: item
}
