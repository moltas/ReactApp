import React from 'react';
import { connect } from 'react-redux';

import './Content.scss';

const Content = ({ title, texts }) => (
    <div>
        <h1 className="blog-title">{title}</h1>
        <div>
            { texts.map((text, index) => (<p className="blog-text" key={index}>{text}</p>)) }
        </div>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    title: state.content.title,
    texts: state.content.texts,
});

export default connect(
    mapStateToProps,
    undefined,
)(Content);
