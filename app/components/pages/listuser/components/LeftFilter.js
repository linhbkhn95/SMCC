import React from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
class LeftFilter extends React.Component{
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
        )
    }
}
module.exports = LeftFilter