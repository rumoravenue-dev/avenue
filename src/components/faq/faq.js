import React from 'react';

const Faq = ({faqs}) => {
    return (
        <>
            <div className="faq__accordion p-relative">

                <div className="accordion" id="accordionExample" >

                    {faqs.map((faq, index) =>
                        <div className="card" key={index}>
                            <div className="card-header accordion-header" id={'acc_' + index} >
                                <h5>
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target={"#collapse_" + index} aria-expanded="false" aria-controls={"collapse_"+index}>
                                        {faq.q}
                                    </button>
                                </h5>
                            </div>

                            <div id={"collapse_"+index} className="collapse" aria-labelledby={'acc_' + index} data-bs-parent="#accordionExample">
                                <div className="card-body accordion-body">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </>
    );
};

export default Faq;
