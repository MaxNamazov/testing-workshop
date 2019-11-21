import React from 'react'
import AccordionContents from './AccordionContents'

class Accordion extends React.Component {
  state = {openIndexes: [0]}
  setOpenIndex = openIndex => this.setState({openIndexes: [openIndex]})
  render() {
    const {openIndexes} = this.state
    return (
      <div>
        {this.props.items.map((item, index) => (
          <React.Fragment key={index}>
            <button onClick={this.setOpenIndex}>
              {item.title}
            </button>
            {openIndexes.includes(index) ? (
              <AccordionContents>{item.contents}</AccordionContents>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    )
  }
}

export default Accordion