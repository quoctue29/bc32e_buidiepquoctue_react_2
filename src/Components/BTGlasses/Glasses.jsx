import React, { Component } from 'react'
import './style.css'

export default class Glasses extends Component {
    GlasseList = [
        {
          id: 1,
          price: 30,
          name: "GUCCI G8850U",
          url: "./glassesImage/v1.png",
          desc:
            "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
          id: 2,
          price: 50,
          name: "GUCCI G8759H",
          url: "./glassesImage/v2.png",
          desc:
            "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
          id: 3,
          price: 30,
          name: "DIOR D6700HQ",
          url: "./glassesImage/v3.png",
          desc:
            "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
          id: 4,
          price: 70,
          name: "DIOR D6005U",
          url: "./glassesImage/v4.png",
          desc:
            "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
          id: 5,
          price: 40,
          name: "PRADA P8750",
          url: "./glassesImage/v5.png",
          desc:
            "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
          id: 6,
          price: 60,
          name: "PRADA P9700",
          url: "./glassesImage/v6.png",
          desc:
            "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
          id: 7,
          price: 80,
          name: "FENDI F8750",
          url: "./glassesImage/v7.png",
          desc:
            "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
          id: 8,
          price: 100,
          name: "FENDI F8500",
          url: "./glassesImage/v8.png",
          desc:
            "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
          id: 9,
          price: 60,
          name: "FENDI F4300",
          url: "./glassesImage/v9.png",
          desc:
            "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
      ];
    
      state = {
        id: "",
        price: "",
        name: "",
        url: "https://via.placeholder.com/1368x400?text=404 Error",
        desc: ""
      };
    
      handleClick = (e) => {
        const gla = this.GlasseList.find(
          (x) => x.id === Number.parseInt(e.target.getAttribute("data-id"))
        );
        this.setState({
          id: gla.id,
          price: gla.price,
          name: gla.name,
          url: gla.url,
          desc: gla.desc
        });
      };
    
    //   removeGlasses = (isCheck) => {
    //     if (isCheck === true) {
    //       this.setState({
    //         id: "",
    //         price: "",
    //         name: "",
    //         url: "https://via.placeholder.com/1368x400?text=404 Error",
    //         desc: ""
    //       });
    //     } else {
    //       return;
    //     }
    //   };
      render() {
        return (
          <div>
            <h2 className="title text-center">Try Glasses App Online</h2>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <div className="vglasses__card">
                    <img src="./glassesImage/model.jpg" alt="model" />
                    <div className="vglasses__model">
                      <img src={this.state.url} alt="v1" />
                    </div>
                    <div className="vglasses__info">
                      <h2 className="text-primary">{this.state.name}</h2>
                      <p>{this.state.desc}</p>
                      <h4>{this.state.price}</h4>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="vglasses__card">
                    <img src="./glassesImage/model.jpg" alt="model" />
                  </div>
                </div>
              </div>
            </div>
    
            <div id="glassesList">
              <div className="row py-5 ">
                {this.GlasseList.map((item) => {
                  return (
                    <div className="col-2" key={item.id}>
                      <img
                        data-id={item.id}
                        onClick={(event) => {
                          this.handleClick(event);
                        }}
                        className="img-fluid"
                        src={item.url}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      }
    }