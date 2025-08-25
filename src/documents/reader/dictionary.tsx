import React from 'react';

import { buildBlockConfigurationDictionary } from '@usewaypoint/document-core';

import ReaderBlockWrapper from '../blocks/helpers/block-wrappers/ReaderBlockWrapper';
import SocialEditor from '../blocks/Social/SocialEditor';
import SocialPropsSchema from '../blocks/Social/SocialPropsSchema';
import SignatureEditor from '../blocks/Signature/SignatureEditor';
import SignaturePropsSchema from '../blocks/Signature/SignaturePropsSchema';

export const READER_DICTIONARY = buildBlockConfigurationDictionary({
  Social: {
    schema: SocialPropsSchema,
    Component: (props) => (
      <ReaderBlockWrapper style={props.style as any}>
        <SocialEditor {...props} />
      </ReaderBlockWrapper>
    ),
  },
  Signature: {
    schema: SignaturePropsSchema,
    Component: (props) => (
      <ReaderBlockWrapper style={props.style as any}>
        <SignatureEditor {...props} />
      </ReaderBlockWrapper>
    ),
  },
});

export type ReaderDictionary = typeof READER_DICTIONARY;
