import MacroElement from "./MacroElement"
import caloriesIcon from '../../assets/calories-icon.png'
import carbsIcon from '../../assets/carbs-icon.png'
import fatIcon from '../../assets/fat-icon.png'
import proteinIcon from '../../assets/protein-icon.png'
import colMacros from './Macros.module.css'
import PropTypes from 'prop-types'

const VALUE_BY_KEY = {
  calorieCount: 'Calories',
  proteinCount: 'Protéines',
  carbohydrateCount: 'Glucides',
  lipidCount: 'Lipides'
}

const UNIT_BY_TYPE = {
  calorieCount: "kCal",
  carbohydrateCount: "g",
  proteinCount: "g",
  lipidCount: "g",
}

const ICON_BY_TYPE = {
  calorieCount: caloriesIcon,
  carbohydrateCount: carbsIcon,
  proteinCount: proteinIcon,
  lipidCount: fatIcon,
};


  /**
   * Macros component
   * 
   * @param props : array containing data macro
   * 
   * @return many macroElement component
   *    
   */
function Macros(props) {

console.log(props.dataMacro)

  return (
    <div className={colMacros.macros}>
      {Object.entries(props.dataMacro).map(([key, value], index) => (
        <MacroElement
          key={index}
          elementName={VALUE_BY_KEY[key]}
          elementValue={value}
          elementUnit={UNIT_BY_TYPE[key]}
          elementIcon={ICON_BY_TYPE[key]} />
      ))}
    </div>

  )
}

Macros.propTypes = {
  dataMacro : PropTypes.object
}

// Macros.propTypes = {
//   dataMacro : PropTypes.shape({
//     PropTypes.string,
//     PropTypes.number
//   })
// }
export default Macros
