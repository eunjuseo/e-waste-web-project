import React, { Component, Fragment } from 'react';

import Post from '../../components/Feed/Post/Post';
import Button from '../../components/Button/Button';
import FeedEdit from '../../components/Feed/FeedEdit/FeedEdit';
import Input from '../../components/Form/Input/Input';
import Paginator from '../../components/Paginator/Paginator';
import Loader from '../../components/Loader/Loader';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';
import './Progress-video.css';
import Parser from 'html-react-parser';
const ewaste_counter = '<iframe align="right" height=\'100\' src=\'https://www.theworldcounts.com/embed/challenges/18?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14\' style=\'border: none\' width=\'300\'></iframe>';
const ewaste_income = '<iframe align="left" height=\'100\' src=\'https://www.theworldcounts.com/embed/challenges/38?background_color=white&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14\' style=\'border: none\' width=\'300\'></iframe>'
class Progressvideo extends Component {
  state = {
    isEditing: false,
    posts: [],
    totalPosts: 0,
    editPost: null,
    status: '',
    postPage: 1,
    postsLoading: true,
    editLoading: false
  };

  render() {
    return (
      <Fragment>
        <ErrorHandler error={this.state.error} onHandle={this.errorHandler} />
        <FeedEdit
          editing={this.state.isEditing}
          selectedPost={this.state.editPost}
          loading={this.state.editLoading}
          onCancelEdit={this.cancelEditHandler}
          onFinishEdit={this.finishEditHandler}
        />
        
        <div className="e-waste_counter">{Parser(ewaste_counter)}</div>
        <div className="e-waste_counter">{Parser(ewaste_income)}</div>
        
        <h1 className="progress__head">Go Green!</h1>
        <h3 className="progress__explanation">We need your continuous attention. Your continuous attention will progress our communities.</h3>
        <div class="progress__body">
            <p>Build a DIY Screen out of recycled parts for cheap @ <a class="deanza_link" href="https://www.youtube.com/user/DIYPerks" target="_blank">DIY Perks</a></p>
            <iframe classname="progress__body_a" width="1000" height="650" src="https://www.youtube.com/embed/CfirQC99xPc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            <p>Things you can make from old, dead laptops @ <a class="deanza_link" href="https://www.youtube.com/user/DIYPerks" target="_blank">DIY Perks</a></p>
            <iframe classname="progress__body_a" width="1000" height="650" src="https://www.youtube.com/embed/WLP_L7Mgz6M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
            <p>Motorcycle Made Out Of Recycled Computer Parts - Diy Project @ <a class="deanza_link" href="https://www.youtube.com/channel/UCTEw7d46cVpPfd-Uzg3OySA/featured" target="_blank">Home Projects</a></p>
            <iframe classname="progress__body_a" width="1000" height="650" src="https://www.youtube.com/embed/xZCpG259D7Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <p>De Anza Computer Donation Program</p>
        </div>
            <div class="deanza__explain">
            <p>De Anza College accepts computer donations.<br />They fix and clean the old computers, and give to students who need computers. <br />
              For more details, visit <a class="deanza_link" href="https://www.deanza.edu/oti/computer_donation.html" target="_blank">De Anza computer donation program</a> </p>
            </div>
      </Fragment>
    );
  }
}

export default Progressvideo;
