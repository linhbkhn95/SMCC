import React from 'react'
import ContainerPost from './components/ContainerPost'
class AnalistUser extends React.Component{

  render(){
    return(
      <div className="row list-user" >
            <div className="col-md-12 right">

                <div className="col-md-4 ">
                    <div className="col-md-12 header-analist  ">Biểu tình <div className="pull-right"><i className="fa fa-spinner fa-spin" style={{fontSize:"24px"}}></i></div></div>
                    <div style={{    background: "#0a2f67"}} className="col-md-12 remove-padding-col list-post" >
                            <ContainerPost />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="col-md-12 header-analist   ">Phản động <div className="pull-right"><i className="fa fa-spinner fa-spin" style={{fontSize:"24px"}}></i></div></div>
                    <div style={{    background: "#0a2f67"}} className="col-md-12 remove-padding-col list-post" >
                            <ContainerPost />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="col-md-12 header-analist  ">Tranh luận <div className="pull-right"><i className="fa fa-spinner fa-spin" style={{fontSize:"24px"}}></i></div></div>
                    <div style={{    background: "#0a2f67"}} className="col-md-12 remove-padding-col list-post" >
                            <ContainerPost />
                    </div>
                </div>

            </div>

      </div>
    )
  }
}

module.exports = AnalistUser
