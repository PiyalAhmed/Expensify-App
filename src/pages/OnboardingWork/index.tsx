import React from 'react';
import {View} from 'react-native';
import FocusTrapForScreens from '@components/FocusTrap/FocusTrapForScreen';
import useThemeStyles from '@hooks/useThemeStyles';
import BaseOnboardingWork from './BaseOnboardingWork';
import type {OnboardingWorkProps} from './types';

function OnboardingWork({...rest}: Omit<OnboardingWorkProps, 'shouldUseNativeStyles'>) {
    const styles = useThemeStyles();
    return (
        <FocusTrapForScreens>
            <View style={styles.h100}>
                <BaseOnboardingWork
                    shouldUseNativeStyles={false}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...rest}
                />
            </View>
        </FocusTrapForScreens>
    );
}

OnboardingWork.displayName = 'OnboardingPurpose';

export default OnboardingWork;
