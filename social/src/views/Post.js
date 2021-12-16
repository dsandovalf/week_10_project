import React, { Component } from 'react'
import {Card, Col, Row} from 'react-bootstrap'
import {getPosts, getPostById} from '../api/apipost'

export default class Post extends Component {
    constructor() {
        super();
        this.state={
            categories:[],
            items:[],
            serverErrorCats:false,
            serverErrorItems:false,
            tokenError:false,
        };
    };


    getCatsItems=async(id)=>{
        const items = await getPostById(localStorage.getItem('token'),id)
        if(items===400){this.setState({tokenError:true})}
        if(items===500){this.setState({serverErrorItems:true})}
        if (items !==500 && items !==400){this.setState({items, itemStart:0, itemEnd:10})}
    }

    getAllPosts=async () =>{
        const items = await getPosts(localStorage.getItem('token'))
        if(items===400){this.setState({tokenError:true})}
        if(items===500){this.setState({serverErrorItems:true})}
        if (items !==500 && items !==400){this.setState({items, itemStart:0, itemEnd:10})}
    }



    render() {

        return (
            <div>
                <Row>
                    <Col md={3}>
                        <center><h3>All Post</h3></center>
                    </Col>
                    <Col md={9}>
                        <Row>
            
                            {this.state.posts.map(
                                post => (
                                    <Card style={{ width: "150px", height: "400px", marginBottom: "25px" }}>
                                        <Card.Body>
                                            <Card.Title>
                                                Post
                                            </Card.Title>
                                            <Card.Text>
                                            {this.props.post.body ?? "..."}
                                            </Card.Text>
                                        </Card.Body>
                                        </Card>
                                )
                            ) 
                            }
                        </Row>
                    </Col>

                </Row>
            </div>
        )
    }
}