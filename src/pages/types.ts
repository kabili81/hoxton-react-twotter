
export type Trends = {
    name: string;
    tweets: number;
    id: number;
  }

  export type Tweet = {
    id: number;
    text: string;
    user: {
        name: string;
        username: string;
        profileImage: string;
    }
    image: string;
    
}


