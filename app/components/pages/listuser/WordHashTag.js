import React from 'react';
import {NavLink} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import InputRange from 'react-input-range';
import WordHashTag from './components/TagCloud'
import 'react-input-range/lib/css/index.css'
import TopKeyWord from './components/TopKeyWord'
import Trend from './components/Trend'

class HashWordTag extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      rating_half_star: 3.5,

      value5: {
        min: 14,
        max: 40,
      },


    }
  }
  render(){
     return(

        <div className="row list-user" >
            <div className="col-md-12">
                  <div className="title-content">
                      Word HashTag
                  </div>
                  <div className="hr-title"></div>

            </div>
            <div className="col-md-12 remove-padding-col left-filter">
                    <div className="col-md-2">

                    <div id="custom-search-input">
                        <div className="input-group col-md-12">
                        <div className="form-group filter">
                          <div className="form-group has-feedback">
                              <input type="text" className="form-control" id="inputValidation" placeholder="Tìm kiếm"/>
                              <span className="glyphicon glyphicon-search form-control-feedback"></span>
                          </div>
                       </div>
                        </div>
                     </div>
                     <div  className="col-md-12 remove-padding-col">
                          <div className="title-filter">
                               BỘ LỌC
                          </div>
                    </div>
                    <div  className="col-md-12 remove-padding-col">
                          <div className="filter">
                               <select className="form-control selectpicker">
                                    <option>Khu vực</option>
                               </select>
                          </div>
                    </div>
                    <div  className="col-md-12 remove-padding-col">
                          <div className="filter">
                          <select className="form-control">
                              <option>Giới tính</option>
                          </select>
                  </div>
                    </div>
                    <div  className="col-md-12 remove-padding-col">
                            <div className="filter">
                            <select className="form-control">
                                <option>Cấp độ</option>
                            </select>
                          </div>
                    </div>
                    <div  className="col-md-12 remove-padding-col">
                       <div className="filter">
                          <select className="form-control">
                              <option>Tùy trọn</option>
                          </select>
                      </div>
                    </div>
                    <div  className="col-md-12 remove-padding-col">
                       <div className="filter">
                          <select className="form-control">
                              <option>Tùy trọn</option>
                          </select>
                      </div>
                    </div>
                    <div  className="col-md-12 remove-padding-col">
                       <div className="filter">
                          <select className="form-control">
                              <option>Tùy trọn</option>
                          </select>
                      </div>
                    </div>
                    <div  className="col-md-12 remove-padding-col">
                       <div className="filter">
                          Độ tuổi
                      </div>
                      <div className="filter">
                      <InputRange
                                draggableTrack
                                maxValue={70}
                                minValue={0}
                                onChange={value => this.setState({ value5: value })}
                                onChangeComplete={value => console.log(value)}
                                value={this.state.value5} />

                      </div>

                    </div>
                </div>

                  <div className="col-md-10 list-data">
                     <div style={{paddingBottom:"20px"}} className="col-md-12 remove-padding-col" >
                        <div className="col-md-9 tagcloud">
                              <WordHashTag  />
                        </div>
                        <div className="col-md-3">
                            <TopKeyWord />

                        </div>
                      </div>
                      <div className="hr-title">
                      </div>

                      <div style={{paddingTop:"50px"}} className="col-md-12">
                        <Trend />
                      </div>

                </div>
</div>
        </div>
     )
  }
}
module.exports =  HashWordTag;
