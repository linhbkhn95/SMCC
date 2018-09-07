import React from 'react'
import RestfulUtils from 'app/utils/RestfulUtils'
import { connect } from 'react-redux'
import DropdownUtils from 'app/utils/input/DropdownUtils'

class DropdownFactory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            datafilter: [],
            CDVAL: "",
            target:''
        }
    }
    //hàm này để lấy objectFilter ;
    getOptionFilter(data,dataFilter){
      let objectFiler = {}
      for (var property in data) {
        //Nếu là điểu kiện để filter
          if(data[property][dataFilter])
              objectFiler[property]=data[property].value;
      }
      return objectFiler;
    }

    componentDidMount() {
        let {optionFilter,urlApi,callApi,returnOject,typeValue,typeLabel } = this.props;

        var that = this;
        let objectFiler = this.getOptionFilter(optionFilter,'isFilter')
        if(callApi)
            RestfulUtils.post(urlApi,objectFiler)
                .then((res) => {
                  //theo chuẩn EC DT EM
                    if (res.EC!=null&&res.EC == 0) {

                        that.setState({ data: res.DT })
                        if (res.DT.length > 0)
                            //mặc định là bản ghi đầu tiên

                            //Nếu là chỉnh sửa dữ liệu thì sẽ gán lại data vào option
                            if(this.props.value){
                              let option = res.DT.filter(e => e[typeValue] === this.props.value);
                              if(option.length>0){
                                that.props.onChange(that.props.type, { type: 'dropdown', value:this.props.value,dataObject:option[0] })

                              }
                            }
                            else{
                               that.props.onChange(that.props.type, { type: 'dropdown', value: that.props.defaultValue ? that.props.defaultValue : res.DT[0][typeValue],dataObject:res.DT[0] })

                            }



                    }
                    else{
                      that.setState({ data: res })
                      if (res.length > 0)
                          //mặc định là bản ghi đầu tiên
                          that.props.onChange(that.props.type, { type: 'dropdown', value: that.props.defaultValue ? that.props.defaultValue : res[0][typeValue],dataObject:res[0] })

                          if(this.props.value){
                            let option = res.filter(e => e[typeValue] === this.props.value);
                            if(option.length>0){
                              that.props.onChange(that.props.type, { type: 'dropdown', value:this.props.value,dataObject:option[0] })

                            }
                          }
                          else{
                             that.props.onChange(that.props.type, { type: 'dropdown', value: that.props.defaultValue ? that.props.defaultValue : res[0][typeValue],dataObject:res[0] })

                          }
                    }

                })
                .catch((e) => {

                })

    }
     //kiểm trả optionFilter có thay đổi hay k
  isEquivalent(a, b) {
        // Create arrays of property names
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);

        // If number of properties is different,
        // objects are not equivalent
        if (aProps.length != bProps.length) {
            return false;
        }

        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];

            // If values of same property are not equal,
            // objects are not equivalent
            if (a[propName] !== b[propName]) {
                return false;
            }
        }

        // If we made it this far, objects
        // are considered equivalent
        return true;
    }
    componentWillReceiveProps(nextProps) {
            let {optionFilter,urlApi,callApi,value,typeValue } = nextProps;
            let that  =this
            let ojectCheckFilter_Pre = this.getOptionFilter(this.props.optionFilter,'checkFilter');
            let ojectCheckFilter_Next = this.getOptionFilter(optionFilter,'checkFilter')
            // let resultCheckOption  = this.isEquivalent(this.props.optionFilter,optionFilter)
             let resultCheckOption  = this.isEquivalent(ojectCheckFilter_Pre,ojectCheckFilter_Next)
            // console.log('componentWillReceiveProps',ojectCheckFilter_Next,ojectCheckFilter_Pre,resultCheckOption)
            let objectFiler = this.getOptionFilter(optionFilter,'isFilter')

            if(optionFilter&&callApi&&!resultCheckOption)
                 RestfulUtils.post(urlApi,objectFiler)
                .then((res) => {

                    if(res.EC!=null&&res.EC == 0) {
                        that.setState({ data: res.DT })
                        if (res.DT.length > 0)
                            that.props.onChange(that.props.type, { type: 'dropdown', value: that.props.defaultValue ? that.props.defaultValue : res.DT[0][typeValue],dataObject:res.DT[0] })


                    }
                    else{
                      that.setState({ data: res })
                      if (res.length > 0)
                          that.props.onChange(that.props.type, { type: 'dropdown', value: that.props.defaultValue ? that.props.defaultValue : res[0][typeValue],dataObject:res[0] })

                    }
                })
                .catch((e) => {

                })

    }

    renderListOption() {
        var that = this;
        let data = this.state.data;
        let {typeValue,typeLabel} = this.props

        if(data.length>0)
        return (

            data.map((option, index) => {
                if(typeLabel){
                  return (
                      option[typeValue] === that.props.value ?
                          <option selected value={option[typeValue]} key={index}>{option[typeLabel]}</option> :
                          <option value={option[typeValue]} key={index}>{ option[typeLabel]}</option>
                  )
                }
                else{
                  return (
                    option[typeValue] === that.props.value ?
                        <option selected value={option[typeValue]} key={index}>{option.CDCONTENT}</option> :
                        <option value={option[typeValue]} key={index}>{option.CDCONTENT}</option>
                )
                }
            })
        )

    }
    onChange(event) {
        // this.setState({sotienDK: event.target.value});
        let data = {}
        let {typeValue} = this.props;
        data.value = this.props.value;
        this.setState({ target:event.target.value })
        let dataObject = {}
        let result;
        if(typeValue){
           result = this.state.data.filter(e => e[typeValue] === event.target.value);
          if(result.length>0)
            dataObject = result[0]

            this.props.onChange(this.props.type, { type: 'dropdown', value: event.target.value,dataObject })

        }
        else{
          this.props.onChange(this.props.type, { type: 'dropdown', value: event.target.value,dataObject })

        }

    }
    render() {

        return (
            this.props.disabled ?
                <select className={this.props.className} ref={this.props.ref} disabled onChange={this.onChange.bind(this)} ref={this.props.type} >

                    {
                        this.renderListOption()
                    }

                </select>
                : <select className={this.props.className} ref={this.props.ref} onChange={this.onChange.bind(this)} ref={this.props.type} >

                    {
                        this.renderListOption()
                    }

                </select>



        )
    }
}
module.exports = connect(function (state) {
    return {
        // language: state.language.language
    }
})(DropdownFactory);
