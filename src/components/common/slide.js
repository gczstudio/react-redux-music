
import React, {Component} from 'react'
import Slider from 'react-slick'
import '../../sass/slider.scss'
class SimpleSlider extends Component {
  render() {
    const {banners} = this.props;
    var settings = {
      dots: true,
      infinite: true,
      speed: 200,
      autoplay:true,
      arrows:false,
      lazyLoad:true
    };
    if(!banners) return false;
    return (
      <Slider {...settings}>
         {

            banners.map((item) => <div key={item.targetId}><SliderItem {...item} /></div>)
          }
      </Slider>
    );
  }
}


class SliderItem extends Component { 
  render() {
    return (
      <a href={this.props.url} target='_blank' rel="noopener">
        <img src={this.props.pic} style={styles.carousel}/>
      </a>
    )
  }
}

export default SimpleSlider

const styles = {
  carousel:{
    width: '100%'
  }
}