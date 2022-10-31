import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

const AnotherDetail = () => {

    const [news, setNews] = useState([])
    const [detail, setDetail] = useState({})

    const {postid} = useParams()
    console.log(postid)
    
    useEffect(() => {
        const getNews = async () => {
            const {data} = await axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f8015427a5af454fbaa323722c970d95")
            console.log('data : ',data);
            const remapData = data.articles.map((article,index)=>{
                return{
                    id: index,
                    ...article
                }
            })
            setNews(remapData)
            setDetail(remapData.find(n=> n.id === parseInt(postid)))
        }
        getNews()
    }, [])
    console.log(detail);
    console.log(news);
    
    return(
        <section className="px-10 md:px-40 flex mt-3 md:mt-10 bg-gray-100 flex-col">
            <div className="flex flex-row">
                <div className="flex flex-col w-full md:mr-20">
                <h1 className="text-xl md:text-3xl font-bold mb-10">{detail.title}</h1>
                <img src={detail.urlToImage} className="w-full h-44 md:h-[380px]" />
                <h1 className="text-lg mt-10 mb-10" dangerouslySetInnerHTML={{__html: detail.content}} />
                <div className="flex flex-col md:flex-row">
                    <h1 className="text-base mt-6 md:mt-10 mr-5">{detail.author}</h1>
                    <h1 className="text-base mt-10 mr-5 hidden md:inline">|</h1>
                    <h1 className="text-base mt-2 md:mt-10">{detail.publishedAt}</h1>
                </div>
            </div>
                <div className="flex flex-col md:w-80">
                    <div className="hidden md:inline">
                        {news.slice(24,28).map((highlight) => {
                            return(
                                <div className="flex flex-col mb-10">
                                    <Link to={`/detail/${highlight.id}`}> <h1 className="font-bold hover:text-blue-900">{highlight.title}</h1> </Link>
                                    <h1 dangerouslySetInnerHTML={{__html: highlight.description}} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <h1 className="mt-14 text-xl font-bold">Another News</h1>

            <div className="flex flex-col md:flex-row md:justify-between mt-6 mb-3 md:mb-10">
                {news.slice(18,22).map((bigHightlight) => {
                    return(
                        <div className="flex flex-row md:flex-col md:w-56 mb-5 md:mb-0">
                            <img 
                                src= {bigHightlight.urlToImage} 
                                className="w-52 h-20 md:w-56 md:h-32 mr-3 md:mr-0"    
                                />
                            <Link to={`/detail/${bigHightlight.id}`}> <h1 className="md:mt-3 font-bold text-sm md:text-base hover:text-blue-900">{bigHightlight.title}</h1> </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default AnotherDetail