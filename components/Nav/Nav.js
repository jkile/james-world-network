import React from 'react'

export default function Nav(props) {

    return (
        <nav class="navbar has-background-link" role="navigation" aria-label="main navigation">
            <div className="navbar-item">
                {!props.isNotMobile &&
                    <div className="navbar-item">
                        <span className="icon has-text-white is-medium" onClick={props.toggle}>
                            <i className="fas fa-bars fa-lg"></i>
                        </span>
                    </div>
                }
            </div>
        </nav>
    )
}
