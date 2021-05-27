function Headline() {
    return (
        <>
            <div class="mt-36 leading-snug text-5xl max-w-xl">
                Software developer and{' '}
                <a href="https://www.igen.ubc.ca/about/" class="border-b-4 border-gray-200 hover:px-4 hover:bg-gray-200 duration-150 ease-in-out">
                    Integrated Engineering
                </a>
                {' '}student at{' '}
                <a href="https://www.ubc.ca/about/" class="border-b-4 border-gray-200 hover:px-4 hover:bg-gray-200 duration-150 ease-in-out">
                    UBC
                </a>
                .
            </div>
            <a class="p-2 uppercase m-auto mt-32 text-xl flex flex-col space-y-3 items-center w-max hover:text-gray-500 duration-100 ease-in-out" href="https://google.com/">
                <div>See my work</div>
                <div class="text-2xl">↓</div>
            </a>
        </>


    )
}

export default Headline
