import React, {Component} from 'react';
import Marker from './marker';
import Container from './container';

  var ATHLETE_DATA =
    { chicago: [
      {id: 1 ,name: "John Malone", city: "Chicago", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_1093859_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/02a966f0-f8f2-0133-b653-0242ac110003/193289-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/02a966f0-f8f2-0133-b653-0242ac110003/317111_GW_MaloneJohn_converted_H264.webm"},
      {id: 2 ,name:"Lucas Williamson III", city: "Chicago", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_473302_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/96e57230-a44b-0132-dcc4-005056b8279b/148552-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/96e57230-a44b-0132-dcc4-005056b8279b/223972+Williamson+III+Lucas.webm"},
      {id: 6 ,name:"Jake Stover", city: "Chicago", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_581598_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/a61971b0-9083-0133-cb04-0242ac11001c/180917-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/a61971b0-9083-0133-cb04-0242ac11001c/2015-12-27-161542-Jake-Stover-hudl-video-order-68449003.webm"},
      {id: 7 ,name:"Allante Pickens", city: "Chicago", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_486402_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/f0aa2670-5363-0133-3cc0-005056b841e3/172641-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/f0aa2670-5363-0133-3cc0-005056b841e3/168893_PickensAllante.webm"},
      {id: 8 ,name:"Joanna Cirrincione", city: "Chicago", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_398631_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/fb5e9760-9c8c-0133-b3be-0242ac110001/182100-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/fb5e9760-9c8c-0133-b3be-0242ac110001/Joanna+Cirrincione+2018+SS%2C+2B%2C+CF.webm"},
      {id: 9 ,name:"Lauren Greif", city: "Chicago", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_824453_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/0acdc660-e3f1-0133-abf3-0242ac110003/190834-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/0acdc660-e3f1-0133-abf3-0242ac110003/319047_CW_GreifLauren_H264.webm"},
      {id: 10 ,name:"Aamir Holmes", city: "Chicago", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_1144832_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/336ac530-e563-0133-206d-0242ac110002/191052-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/336ac530-e563-0133-206d-0242ac110002/321296_HolmesAamir_converted_H264.webm"},
      {id: 11 ,name:"Ashley Bryja", city: "Chicago", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_510193_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/106d4590-7528-0133-c35a-0242ac110006/178576-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/106d4590-7528-0133-c35a-0242ac110006/255640_1_BryjaAshley_H264.webm"},
      {id: 12 ,name:"Quentin Shields", city: "Chicago", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_990606_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/88c14570-d440-0133-f2c8-0242ac110002/189078-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/88c14570-d440-0133-f2c8-0242ac110002/180810_1_ShieldsQuentin_converted.webm"},
      {id: 13 ,name:"Jamarrio Rule", city: "Chicago", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_447651_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/03406b40-0d91-0133-e387-005056b8279b/162778-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/03406b40-0d91-0133-e387-005056b8279b/268051+Rule+Jamarrio.webm"},
      {id: 14 ,name:"Christina Binyon", city: "Chicago ", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_397928_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/3064d1d0-0f9b-0132-6a11-005056b8330b/117488-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/3064d1d0-0f9b-0132-6a11-005056b8330b/217286_1_BinyonChristina_H264.webm"},
      {id: 15 ,name:"Jeffrey Mannings 2", city: "Philadelphia", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_819028_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/8b83d460-8a45-0133-8255-0242ac110015/180539-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/8b83d460-8a45-0133-8255-0242ac110015/292588_ManningJeff.webm"},
      {id: 16 ,name:"Carlton Rutherford Jr.", city: "Chicago", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_549617_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/dd51d2d0-623d-0133-e9b7-005056b8279b/175903-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/dd51d2d0-623d-0133-e9b7-005056b8279b/231926_RutherfordCarlton.webm"},
      {id: 17 ,name:"Max Rimac", city: "Chicago", photo: "/default_client_image.png", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/18082fa0-8cd9-0131-fabb-005056b841e3/100092-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/18082fa0-8cd9-0131-fabb-005056b841e3/195919_1_RimacMax.webm"},
      {id: 18 ,name:"Anthony Yaghmour", city: "Chicago", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_390536_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/62ee1ea0-9871-0132-2ed8-005056b841e3/146182-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/62ee1ea0-9871-0132-2ed8-005056b841e3/212891_1_YaghmourAnthony.webm"},
      {id: 19 ,name:"Larry Washington", city: "Chicago ", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_398008_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/4862c0e0-6480-0132-235e-005056b841e3/135722-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/4862c0e0-6480-0132-235e-005056b841e3/215158_1_WashingtonLarry.webm"},
      {id: 20 ,name:"Anthony Saro", city: "Chicago", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_389820_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/2466ef90-60ad-0133-3da9-005056b841e3/175578-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/2466ef90-60ad-0133-3da9-005056b841e3/205295_SaroAnthony.webm"},
      {id: 24 ,name:"Jahi Stigall", city: "Chicago", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_448001_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/d2c5a5b0-529a-0133-3cb2-005056b841e3/172499-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/d2c5a5b0-529a-0133-3cb2-005056b841e3/207442_1_StigallJahi.webm"},
      {id: 25 ,name:"Ciara Mardirosian", city: "Chicago", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_418115_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/3b3f9dc0-5a36-0132-cc3b-005056b8279b/132788-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/3b3f9dc0-5a36-0132-cc3b-005056b8279b/219265_MardirosianCiara.webm"}
    ],
    philadelphia: [
      {id: 23 ,name:"Nick Picariello", city: "Philadelphia", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_372663_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/c903bb70-367d-0134-2336-0242ac110003/200617-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/c903bb70-367d-0134-2336-0242ac110003/nick+picariello.webm"},
      {id: 3 ,name:"Geoff Beere", city: "Philadelphia", photo: "/default_client_image.png", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/bb625050-034b-0134-08cd-0242ac110002/194603-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/bb625050-034b-0134-08cd-0242ac110002/227853_IM2_BeereGeoff_converted.webm"},
      {id: 4 ,name:"Brianna Donaghy", city: "Philadelphia", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_383172_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/4d003df0-6fa1-0133-98b9-005056b8330b/177837-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/4d003df0-6fa1-0133-98b9-005056b8330b/279701_MF_DonaghyBrianna.webm"},
      {id: 5 ,name:"Justin Billups", city: "Philadelphia", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_253183_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/9341c3a0-a8e5-0133-4406-0242ac110001/183511-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/9341c3a0-a8e5-0133-4406-0242ac110001/163435_1_BillupsJustin_H264.webm"},
      {id: 26 ,name:"Brian Yost", city: "Philadelphia", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_768182_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/32602ce0-df21-0133-0def-0242ac110003/190273-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/32602ce0-df21-0133-0def-0242ac110003/320976_YostBrian_converted_H264.webm"},
      {id: 27 ,name:"Paris Banks", city: "Philadelphia ", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_498256_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/229619d0-893e-0132-8664-005056b8330b/142895-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/229619d0-893e-0132-8664-005056b8330b/237486_BanksParisH264.webm"},
      {id: 28 ,name:"Sam Aslansan", city: "Philadelphia", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_554963_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/df91d7c0-07f2-0133-91e5-005056b8330b/162056-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/df91d7c0-07f2-0133-91e5-005056b8330b/238610_1_AslansanSam.webm"},
      {id: 29 ,name:"Jada Smith", city: "Philadelphia", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_863115_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/e11c2a70-4165-0134-b422-0242ac110004/202025-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/e11c2a70-4165-0134-b422-0242ac110004/325164_4_SmithJada_converted.webm"},
      {id: 30 ,name:"Ronald Cavalier", city: "Philadelphia", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_556613_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/512787a0-3ca4-0134-1240-0242ac110003/201400-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/512787a0-3ca4-0134-1240-0242ac110003/247967-Ronald-Cavalier_JC_HLs_H264.webm"},
      {id: 31 ,name:"Ronald Lloyd", city: "Philadelphia", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_1111641_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/61099620-d826-0133-5f1a-0242ac110002/189398-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/61099620-d826-0133-5f1a-0242ac110002/316903_LloydRonald.webm"},
      {id: 32 ,name:"Dreah Walker", city: "Philadelphia", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_546261_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/56341520-665a-0134-1f10-0242ac110003/206289-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/56341520-665a-0134-1f10-0242ac110003/266740_RR_WalkerDreah.webm"},
      {id: 33 ,name:"Frank Driscoll", city: "Philadelphia", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_1290895_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/ca0ce3e0-1b84-0134-9345-0242ac110002/197447-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/ca0ce3e0-1b84-0134-9345-0242ac110002/274833-Frank-Driscoll_JC_H264.webm"},
      {id: 34 ,name:"Ariana Ruffin", city: "Philadelphia ", photo: "http://s3.amazonaws.com/rms-rmfiles-production/client_photos/athlete_557097_original.jpg", thumbnail_url: "https://d1vv3r1s83df1b.cloudfront.net/0e37ab30-2d83-0133-951e-005056b8330b/166433-mp4-00002.png", video_url: "https://d1vv3r1s83df1b.cloudfront.net/0e37ab30-2d83-0133-951e-005056b8330b/275891_1_RuffinAriana.webm"}
    ]}

export default class Root extends Component {

  constructor(props) {
    super(props)
    this.state = {
      city: 'chicago',
      athlete_data: ATHLETE_DATA["chicago"]
    };
  }

  setCityAndData(city){
    console.log("I am here")
    this.setState({city: city, athlete_data: this.state.city == 'chicago' ? ATHLETE_DATA["chicago"] : ATHLETE_DATA["philadelphia"]});
  }

  render() {
    const markers = [<Marker lat={41.881832} lng={-87.623177} text={"Chicago"} key='{1}' onClick={this.setCityAndData.bind(this, 'chicago')} />, <Marker lat={39.9526} lng={-75.1652} text={"Philadelphia"} key='{2}'  onClick={this.setCityAndData.bind(this, 'philadelphia')} />]

    return (
    <Container markers={markers} athlete_data={this.state.athlete_data} />
  )};
}