export default function Section({ children, className, flex = false, ...restProps }) {


    return (
        <section className={className} {...restProps}>
            <div className={`container ${flex && 'flex flex-responsive gap-5'}`}>
                {children}
            </div>
        </section>
    )


}