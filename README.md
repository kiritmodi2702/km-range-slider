# RangeSlider
A highly optimized and fully customizable pure JS component for value range selection.

# Image 


![Image of RangeSlider](https://i.ibb.co/JxH3Hk0/slider.png)


## Installation

* npm: `npm install --save km-range-slider`
* yarn: `yarn add km-range-slider`


## Usage

KmSlider uses react hooks, so this component doesn't work with React Native versions below 0.59.0

```
...

import KmSlider from 'km-range-slider';

...

const [low, setLow] = useState(0)
const [high, setHigh] = useState(0)
...

<RangeSlider
  style={{ flex: 1, width: screenWidth - 32, marginTop: 10 }}
  min={0}
  max={100}
  step={1}
  hideFloatingLabel={false}
  hideLeftRightLabel={false}
  styleLeftRightLable={{
      color: "red",
  }}
  disableRange
  allowLabelOverflow={true}
  floatingLabel={true}
  renderThumb={() => {
      return (
          <View style={{
              backgroundColor: "white",
              height: 25,
              width: 25,
              borderRadius: 15,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 1.5,
              elevation: 4
          }}></View>
      )
  }}
  renderRail={() => {
      return (
          <View style={{
              height: 5,
              width: screenWidth - 44.5,
              backgroundColor: "blue"
          }}></View>
      )
  }}
  renderRailSelected={() => {
      return (
          <View style={{ backgroundColor: "green", height: 5, width: '100%', marginLeft: -12 }}></View>
      )
  }}
  renderLabel={(value) => {
      return (
          <Text style={{ color: "blue" }}>{value}</Text>
      )
  }}
  onValueChanged={(low, high) => {
      //setLow(low)
      //setHigh(high)
  }}
/>

...
```

### RangeSlider

We are using the current package : ![Silder](https://www.npmjs.com/package/rn-range-slider), Some of the required modification in it. I have added some new props in it.  


### Properties

| Name |      Description      | Type | Default Value |
| --- | --- | --- | :-------------: |
| `min` |  Minimum value of slider | number | _**required**_ |
| `max` |  Maximum value of slider | number | _**required**_ |
| `step` |  Step of slider | number | `1` |
| `low` |  Low value of slider | number | Initially `min` value will be set if not provided |
| `high` |  High value of slider | number | Initially `max` value will be set if not provided |
| `hideFloatingLabel` | Floating label will be hide after slideing Because it's defaut value true. | boolean | `true` |
| `hideLeftRightLabel` | Lable with min and max value, it will be display on the slider edge. | boolean | `true` |
| `styleLeftRightLable` | Style object of Left & Right Text.  | object | `{ color : 'black }` |
| `floatingLabel` |  If set to `true`, labels will not take space in component tree. Instead they will be rendered over the content above the slider (like a small popup). | boolean | `false` |
| `disableRange` | Slider works as an ordinary slider with 1 control if `true` | boolean | `false` |
| `disabled` | Any user interactions will be ignored if `true` | boolean | `false` |
| `allowLabelOverflow` | If set to `true`, labels are allowed to be drawn outside of slider component's bounds.<br/>Otherwise label's edges will never get out of component's edges. | boolean | `false` |
| `renderThumb` | Should render the thumb. | `() => Node` | _**required**_ |
| `renderRail` | Should render the "rail" for thumbs.<br/>Rendered component **should** have `flex: 1` style so it won't fill up the whole space. | `() => Node` | _**required**_ |
| `renderRailSelected` | Should render the selected part of "rail" for thumbs.<br/>Rendered component **should not** have `flex: 1` style so it fills up the whole space. | `() => Node` | _**required**_ |
| `renderLabel` | Should render label above thumbs.<br/>If no function is passed, no label will be drawn. | `(value: number) => Node` | `undefined` |
| `renderNotch` | Should render the notch below the label (above the thumbs).<br/>Classic notch is a small triangle below the label.<br/>If `allowLabelOverflow` is not set to true, the notch will continue moving with thumb even if the label has already reached the edge of the component and can't move further.| `() => Node` | `undefined` |
| `onValueChanged` | Will be called when a value was changed.<br/>If `disableRange` is set to true, the second argument should be ignored.<br/>`fromUser` will be true if the value was changed by user's interaction. | `(low: number, high: number, fromUser: boolean) => void` | `undefined` |



