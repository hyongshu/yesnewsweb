import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import appConfig from '../config/app';
import RequestUtil from '../utils/request';
import DateUtil from '../utils/date';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: [],
            imageList: [],
            attachmentList: [],
        };
    }

    componentDidMount = async () => {

        RequestUtil.fetchJSON(appConfig.api.news.query,
            this.props.match.params.auth, {
            id: this.props.match.params.id,
        }).then((response) => {
            console.log(response.data)
            if (response.data) {
                let imageList = []
                let attachmentList = []
                const fileExtensionReg = /(?:\.([^.]+))?$/
                response.data.attachmentList.map(item => {
                    const fileExtension = fileExtensionReg.exec(item.url)[1]
                    switch (fileExtension) {
                        case 'jpg':
                        case 'jpeg':
                        case 'png':
                        case 'gif':
                            imageList.push({
                                ...item,
                                source: {
                                    uri: item.url,
                                }
                            })
                            break
                        default:
                            attachmentList.push(item)
                    }
                })
                this.setState({
                    detail: response.data.detail,
                    imageList,
                    attachmentList,
                })
            } else {
                console.log('error!!!')
            }
        }).catch((error) => {
            console.log(error)
        });

    };

    render() {

        const { date, detail, image, postedBy, title } = this.state.detail

        return (
            <div>
                <img src={image} alt="Pic" width="100%" height="100%" />
                <div className='content'>
                    <strong>{title}</strong>

                    <div>
                        <p className='fontRed inline'> {`Date: ${DateUtil.getFormattedDate(date)}`}</p>
                        <p className='inline'>| By: {postedBy}</p>
                    </div>

                    <div>{ReactHtmlParser(detail)}</div>

                    {
                        this.state.imageList.length > 0 && (
                            <div
                                style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    paddingTop: 8,
                                    paddingRight: 8,
                                    paddingLeft: 16,
                                }}
                            >
                                {
                                    this.state.imageList.map((item, index) => (
                                        <img src={item.url} alt="Pic" width="100%" />
                                    ))
                                }
                            </div>
                        )
                    }


                    {
                        this.state.attachmentList.length > 0 && (
                            <div className="attachFile">
                                {
                                    this.state.attachmentList.map(item => (
                                        <p className="fontAttachFile">
                                            <a className="fontRed" href={item.url}>{item.name}</a>
                                        </p>
                                    ))
                                }
                            </div>
                        )
                    }

                </div>
            </div>
        );
    }
}
