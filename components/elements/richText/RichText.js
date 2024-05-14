import React from 'react';

import blogConfig from '../../../blogConfig';

import styling from './RichText.module.scss';

/**
 * Renders a rich text element.
 *
 * Info: It is safe to use dangerouslySetInnerHTML without
 * sanitizing it on the client.
 *
 * @param text {string} rich text
 * @returns {*}
 * @constructor
 */
const RichText = ({ text }) => (
    <div className={styling.richText} dangerouslySetInnerHTML={{ __html: text[blogConfig.locale] }} />
);

export default RichText;