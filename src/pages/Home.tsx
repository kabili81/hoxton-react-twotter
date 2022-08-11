import { useEffect, useState } from "react"
import { LeftMenu } from "../components/LeftMenu"
import { MainMenu } from "../components/MainMenu"
import { RightMenu } from "../components/RightMenu"
import { Tweet } from "./types"

type Props = {
    setTweets: (tweets: Tweet[]) => void
}

export function Home() {

 
    return(
        <>
        <LeftMenu />
        <MainMenu />
        <RightMenu />
        </>
    )
}