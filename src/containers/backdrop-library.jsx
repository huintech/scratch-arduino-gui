import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';
import VM from '@huintech/scratch-arduino-vm';

import backdropLibraryContent from '../lib/libraries/backdrops.json';
import backdropTags from '../lib/libraries/backdrop-tags';
import LibraryComponent from '../components/library/library.jsx';

const messages = defineMessages({
    libraryTitle: {
        defaultMessage: 'Choose a Backdrop',
        description: 'Heading for the backdrop library',
        id: 'gui.costumeLibrary.chooseABackdrop'
    }
});


class BackdropLibrary extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleItemSelect'
        ]);
    }
    handleItemSelect (item) {
        const vmBackdrop = {
            name: item.name,
            rotationCenterX: item.rotationCenterX,
            // rotationCenterX: item.info[0] && item.info[0] / 2,
            // rotationCenterY: item.info[1] && item.info[1] / 2,
            rotationCenterY: item.rotationCenterY,
            bitmapResolution: item.bitmapResolution,
            // bitmapResolution: item.info.length > 2 ? item.info[2] : 1,
            skinId: null
        };
        // Do not switch to stage, just add the backdrop
        // this.props.vm.addBackdrop(item.md5, vmBackdrop);
        // TODO: json format changed in backdrop info file
        this.props.vm.addBackdrop(item.md5ext, vmBackdrop);
    }
    render () {
        return (
            <LibraryComponent
                data={backdropLibraryContent}
                id="backdropLibrary"
                tags={backdropTags}
                title={this.props.intl.formatMessage(messages.libraryTitle)}
                onItemSelected={this.handleItemSelect}
                onRequestClose={this.props.onRequestClose}
            />
        );
    }
}

BackdropLibrary.propTypes = {
    intl: intlShape.isRequired,
    onRequestClose: PropTypes.func,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default injectIntl(BackdropLibrary);
