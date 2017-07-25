import React from 'react';
import FilterLink from "../containers/FilterLink";

const Footer = () => (
    <p>
        Show:
        <button>
            <FilterLink filter = "SHOW_ALL">All</FilterLink>
        </button>
        <button>
            <FilterLink filter = "SHOW_ACTIVE">Active</FilterLink>
        </button>
        <button>
            <FilterLink filter = "SHOW_COMPLETED">Completed</FilterLink>
        </button>
    </p>
);

export default Footer;
