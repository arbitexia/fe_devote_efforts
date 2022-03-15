import React from 'react'
import '../../styles/success.scss'

function SuccessfulStory() {
  return (
    <div className="success">
      <div className="container container-sw">
        <div className="row">
          <div className="success-left">
            <div className="why">Why us</div>
            <div className="unsure">Still unsure?</div>
          </div>
          <div className="success-right">
            <div className="desc">
              Here are 3 reasons you should partner with us!
            </div>
            <div className="pricing">
              <button>Pricing</button>
            </div>
          </div>
        </div>
        <div className="stories">
          <div className="story">
            <div className="eval">7+</div>
            <div className="title">Years of Experience</div>
            <div className="desc">
              We've had quite a run in our 7+ years of operation with successful
              project launches across Europe and dozens of viral campaigns.
            </div>
          </div>
          <div className="story">
            <div className="eval">32+</div>
            <div className="title">Clients contacted again</div>
            <div className="desc">
              Over half our clients stay with us for longer than a single
              project. Over half our clients stay with us for longer than a
              single project.
            </div>
          </div>
          <div className="story">
            <div className="eval">87+</div>
            <div className="title">Completed projects</div>
            <div className="desc">
              We may be young but our agency has already won 13 Excellence
              Awards for our work. Over half our clients stay with us for
              longer.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessfulStory
