import React from 'react'
import AccordionContents from './AccordionContents'

class Accordion extends React.Component {
  state = {openIndex: 0}
  setOpenIndex = openIndex => this.setState({openIndex})
  render() {
    const {openIndex} = this.state
    return (
      <div>
        {this.props.items.map((item, index) => (
          <React.Fragment key={index}>
            <button onClick={() => this.setOpenIndex(index)}>
              {item.title}
            </button>
            {index === openIndex ? (
              <AccordionContents>{item.contents}</AccordionContents>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    )
  }
}

export default Accordion