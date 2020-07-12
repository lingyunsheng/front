import React from 'react';
import {
    ListWrapper,
    ListItem,
    List
} from './style';
import LazyLoad from "react-lazyload";
import { getCount } from "../../utils/api";
import { withRouter } from 'react-router-dom';

function RecommendList(props) {
    const enterDetail = (id) => {
        props.history.push(`/recommend/${id}`);
    }

    return (
        <div>
            <ListWrapper>
                <h1 className="title">推荐歌单</h1>
                <List>
                    {
                        props.recommendList.slice(0, 6).map(item => {
                            return (
                                <ListItem key={item.id} onClick={() => enterDetail(item.id)}>
                                    <div className="img_wrapper">
                                        <div className="decorate"></div>
                                        {/* <LazyLoad placeholder={<img width="100%" height="100%" src={require('./music.png')} alt="music"/>}> */}
                                        <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music" />
                                        {/* </LazyLoad> */}
                                        <div className="play_count">
                                            <i className="iconfont play">&#xe885;</i>
                                            <span className="count">{getCount(item.playCount)}</span>
                                        </div>
                                    </div>
                                    <div className="desc">{item.name}</div>
                                </ListItem>
                            )
                        })
                    }
                </List>
                <h1 className="title">新碟</h1>
                <List>
                    {
                        props.recommendList.slice(6,9).map(item => {
                            return (
                                <ListItem key={item.id} onClick={() => enterDetail(item.id)}>
                                    <div className="img_wrapper">
                                        <div className="decorate"></div>
                                        {/* <LazyLoad placeholder={<img width="100%" height="100%" src={require('./music.png')} alt="music"/>}> */}
                                        <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music" />
                                        {/* </LazyLoad> */}
                                        <div className="play_count">
                                            <i className="iconfont play">&#xe885;</i>
                                            <span className="count">{getCount(item.playCount)}</span>
                                        </div>
                                    </div>
                                    <div className="desc">{item.name}</div>
                                </ListItem>
                            )
                        })
                    }
                </List>
                <h1 className="title">听歌</h1>
                <List>
                    {
                        props.recommendList.slice(9, 12).map(item => {
                            return (
                                <ListItem key={item.id} onClick={() => enterDetail(item.id)}>
                                    <div className="img_wrapper">
                                        <div className="decorate"></div>
                                        {/* <LazyLoad placeholder={<img width="100%" height="100%" src={require('./music.png')} alt="music"/>}> */}
                                        <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music" />
                                        {/* </LazyLoad> */}
                                        <div className="play_count">
                                            <i className="iconfont play">&#xe885;</i>
                                            <span className="count">{getCount(item.playCount)}</span>
                                        </div>
                                    </div>
                                    <div className="desc">{item.name}</div>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </ListWrapper>
        </div>
    );
}

export default React.memo(withRouter(RecommendList));
