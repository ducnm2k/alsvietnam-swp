import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {motion} from "framer-motion";
import {css} from "styled-components/macro"; //eslint-disable-line
import {SectionHeading} from "components/misc/Headings.js";

import {
    Container,
    Content2Xl,
    ContentWithPaddingXl,
} from "components/misc/Layouts.js";

const Row = tw.div`flex flex-col md:flex-row justify-between max-w-screen-2xl mx-auto -mb-10`;
const Heading = tw(SectionHeading)`text-left lg:text-2xl xl:text-2xl`;
const Content = tw.div`max-w-none flex flex-col xl:flex-row`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = styled.div((props) => [
    tw` md:flex justify-start items-center mt-32`,
    props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled(motion.div)((props) => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded md:w-1/2 lg:w-5/12 xl:w-5/12 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);

const PopularPostsContainer = tw.div` flex-col lg:w-10/12 mx-4 py-8 md:py-8`;
const PostsContainer = tw.div` flex flex-col  sm:justify-between lg:justify-start `;
const Post = tw(
    motion.a
)`block sm:max-w-2xl cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
const AuthorInfo = tw.div`mt-6 flex items-center`;
const AuthorImage = tw.img`w-12 h-12 rounded-full`;
const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName = tw.h5`font-semibold text-lg`;
const AuthorProfile = tw.p`text-secondary-100 text-sm`;
const Details = tw.div`mt-4 md:mt-0  mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h5`text-xl  text-gray-900`;
const Description = tw.h4`text-lg  font-normal leading-loose`;
const Link = tw.a`inline-block mt-4 text-xl text-green-600 cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-green-500 hover:text-green-600`;
const LinkPost = styled.li`
margin-bottom:.75rem;
&:hover {
    text-decoration: underline;
    text-decoration-color: #2f855a;
    text-decoration-style: solid;
}
`;
const RecentPostsContainer = styled.div`
  ${tw`mt-16 lg:mt-1 lg:w-1/3 md:py-8 `}
  ${Heading} {
    ${tw`text-2xl font-semibold xl:text-3xl `}
  }

  ${PostsContainer} {
    ${tw`flex flex-wrap lg:flex-col `}
  }

  ${Post} {
    ${tw`flex justify-between  max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0`}
  }

  ${Title} {
    ${tw`text-xs font-medium text-black xl:text-lg mt-0 mr-0 ml-3 lg:max-w-lg`}
  }

  ${AuthorName} {
    ${tw` mt-8 text-sm text-secondary-500  leading-loose xl:text-lg font-normal leading-none`}
  }

  ${Image} {
    ${tw`h-20 w-20 flex-shrink-0`}
  }
`;
const PostTextContainer = tw.div``;

export default ({headerName, cards, recentPosts}) => {
    // This setting is for animating the post background image on hover
    const postBackgroundSizeAnimation = {
        rest: {
            backgroundSize: "100%",
        },
        hover: {
            backgroundSize: "110%",
        },
    };
    headerName = headerName;

    cards = cards;
    recentPosts = recentPosts;
    return (
        <Container>
            <div style={{position: "fixed", marginLeft:'-2rem'}}>
                <a
                    href="#"
                    class="fa fa-facebook"
                    style={{
                        padding: "10px",
                        fontSize: "20px",
                        width: "40px",
                        textAlign: "center",
                        margin: "2px 2px",
                        background: "#3B5998",
                        color: "white",
                        borderRadius: "50%",
                    }}
                ></a>
                <br/>
                <a
                    href="#"
                    class="fa fa-youtube-play"
                    style={{
                        padding: "10px",
                        fontSize: "20px",
                        width: "40px",
                        textAlign: "center",
                        margin: "2px 2px",
                        background: "red",
                        color: "white",
                        borderRadius: "50%",
                    }}
                ></a>
            </div>
            <Content2Xl>
                <Row style={{width:'100%'}}>
                    <PopularPostsContainer>
                        <PostsContainer>
                            {cards.map((card, i) => (
                                <Card>{card.imageSrc?
                                    <img src={card.imageSrc} style={{height: '15rem', width: '15rem',objectFit:'cover',marginTop:'-4rem'}} />:null}
                                    <Details>
                                        <Title style={{fontFamily: "Gotham", fontWeight: "420"}}>
                                            {card.title}
                                        </Title>
                                        <Description
                                            style={{
                                                fontFamily: "Gotham A,Gotham B,Gotham,sans-serif",
                                            }}
                                        >
                                            {card.description}
                                        </Description>
                                        <Link href={card.url}>Read more</Link>
                                        <div style={{borderTop: '1px solid', marginBottom: '2rem', marginTop: '2rem'}}/>
                                    </Details>
                                </Card>
                            ))}

                        </PostsContainer>
                    </PopularPostsContainer>
                    <RecentPostsContainer>
                        <div
                            style={{
                                fontFamily: "Gotham A,Gotham B,Gotham,sans-serif",
                                backgroundColor: "#Efffef",
                                padding: "2rem",
                                height: "100%",
                                position: "relative",
                                borderRadius:'25px'
                            }}
                        >
                            <Heading style={{fontFamily: "Gotham", fontWeight:'450'}}>Recent Posts</Heading>
                            <PostsContainer>
                                {recentPosts.map((post, index) => (
                                    <Post key={index} href={post.url}>
                                        <LinkPost style={{color: '#033443', fontFamily: 'Gotham',fontWeight:'800'}}>
                                            {post.title}
                                        </LinkPost>

                                        {/* {post.article?.map((article, index) => (
                                                <AuthorName style={{ fontFamily: 'Gotham'}}>{article.articletitle}</AuthorName>
                                            ))}*/}


                                    </Post>
                                ))}
                            </PostsContainer>
                        </div>
                    </RecentPostsContainer>
                </Row>
            </Content2Xl>
        </Container>
    );
};
