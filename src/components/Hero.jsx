import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Hero = () => {
    const [news, setNews] = useState([])
    
    useEffect(() => {
        const getNews = async () => {
            const {data} = await axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f8015427a5af454fbaa323722c970d95")
            setNews(data.articles.map((article,index)=>{
                return{
                    id: index, 
                    ...article
                }
            }))
        }
        getNews()
    }, [])

    return(
        <section className="px-10 md:px-40 flex my-3 md:mt-8 bg-gray-100">
            <div className="flex flex-col">
                {news.slice(0,1).map(header => {
                    return(
                        <div className="flex flex-col md:flex-row w-[310px] md:w-auto">
                            <img 
                                src={header.urlToImage}
                                className="md:h-[370px] md:mr-8"
                            />
                            <div className="border-2 border-gray-700 mt-3 md:mt-0 px-5 py-3">
                                <Link to={`/detail/${header.id}`}><h1 className="text-lg font-bold mb-8 hover:text-blue-900">{header.title}</h1></Link>
                                <h1 className="text-justify" dangerouslySetInnerHTML={{__html: header.description}} />    
                            </div>     
                        </div>
                    )
                })}
                        
                <div className="flex flex-col md:flex-row mt-12 mb-10">
                {news.slice(2,6).map((highlight,index) => {
                    return(
                        <div className="flex flex-row md:flex-col md:w-[258px] px-2 md:px-4 mb-5 md:mb-0">
                            <h1 className="text-4xl font-bold text-blue-900 mb-3">{index+1}</h1>
                            <Link to={`/detail/${highlight.id}`}> <h1 className="ml-5 md:ml-0 mb:mt-2 font-bold hover:text-blue-900">{highlight.title}</h1> </Link>
                            <h1 className="mt-2 hidden md:inline" dangerouslySetInnerHTML={{__html: highlight.description}} />
                            <hr className="mt-4 border-gray-400 hidden md:inline" />
                            <div className="flex justify-between mt-2">
                                <div className="hidden md:inline">
                                    <h1 className="text-sm">{highlight.author}</h1>
                                    <Link to={`/detail/${highlight.id}`}><h1 className="text-xs text-blue-900 text-right">Read Mores</h1></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
                
                <hr className="border-black border-2 w-full my-5" />

                <div className="flex flex-col md:flex-row md:justify-between mt-3 md:mt-12 mb-5">
                    {news.slice(7,9).map(bigHighlight => {
                        return(
                        <div className="w-80 md:w-[490px] flex flex-col">
                            <img 
                                src={bigHighlight.urlToImage}
                                className="md:h-[280px] mt-8 md:mt-0"
                            />
                             <Link to={`/detail/${bigHighlight.id}`}> <h1 className="mt-5 text-xl font-bold hover:text-blue-900">{bigHighlight.title}</h1> </Link>
                            <h1 className="mt-5 text-justify" dangerouslySetInnerHTML={{__html: bigHighlight.description}} />
                            <hr className="mt-5 border-gray-400" />
                            <div className="flex justify-between mt-3">
                                <h1 className="text-sm">{bigHighlight.author}</h1>
                                <h1 className="text-xs text-blue-900 text-right">{bigHighlight.publishedAt}</h1>
                            </div>
                        </div>
                        )
                    })}
                </div>

                <div className="flex flex-col md:flex-row md:justify-between mt-8 md:mt-12 mb-10">
                    {news.slice(10, 13).map(littleHighlight => {
                        return(
                        <div className="md:w-[260px] flex flex-row md:flex-col mt-3 md:mt-0">
                            <img 
                                src={littleHighlight.urlToImage}
                                className=" h-20 md:h-[150px]"
                            />
                            <Link to={`/detail/${littleHighlight.id}`}> <h1 className="w-40 ml-5 md:ml-0 mt-0 md:mt-5 font-bold text-xs md:text-base hover:text-blue-900">{littleHighlight.title}</h1> </Link>
                            <h1 className=" mt-5 text-sm text-justify hidden md:inline" dangerouslySetInnerHTML={{__html: littleHighlight.description}} />
                            <hr className="mt-5 border-gray-400" />
                            <div className="flex justify-between mt-3">
                                <div className="hidden md:inline">
                                    <h1 className="text-sm">{littleHighlight.author}</h1>
                                    <h1 className="text-xs text-blue-900 text-right">{littleHighlight.publishedAt}</h1>
                                </div>
                            </div>
                        </div>
                        )
                    })}

                    <div className="mt-10 md:mt-0 px-2 w-80 md:w-[200px]">
                    {news.slice(14,17).map(sideNews => {
                        return(
                            <div>
                                <hr className="border-black border-1" />
                                 <Link to={`/detail/${sideNews.id}`}> <h1 className="font-bold py-5 text-center md:text-right hover:text-blue-900">{sideNews.title}</h1> </Link>
                            </div>
                        )
                    })}     
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default Hero