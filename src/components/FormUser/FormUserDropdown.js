import React from 'react';

const FormUserDropdown = () => {
    return (
        <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Mark your skills
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">

            <div className="form-check-inline">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                    Varenje
                </label>
            </div>

            <div className="form-check-inline">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                    Ciscenje
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                    Motanje
                </label>
            </div>
            
            <div className="form-check-inline">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                    Default checkbox
                </label>
            </div>

            <div className="form-check-inline">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                    Default checkbox
                </label>
            </div>

        </div>
      </div>
    );
};

export default FormUserDropdown;