import { Spacer } from 'native-x-spacer'
import { Stack } from 'native-x-stack'
import { Text } from 'native-x-text'
import { COLOR, ContainerStyleProps } from 'native-x-theme'
import React from 'react'

interface Props extends ContainerStyleProps {
  title?: string
  children: string
  alignLeft?: boolean
  alignCenter?: boolean
  alignRight?: boolean
  alignTop?: boolean
  alignMiddle?: boolean
  alignBottom?: boolean
  titleColor?: string
  descriptionColor?: string
}

export function EmptyMessage({
  title,
  children,
  alignLeft,
  alignCenter,
  alignRight,
  alignTop,
  alignMiddle,
  alignBottom,
  padding = 'none',
  titleColor = COLOR.SECONDARY,
  descriptionColor = COLOR.TERTIARY,
  ...props
}: Props) {
  return (
    <Stack
      alignLeft={alignLeft}
      alignCenter={alignCenter}
      alignRight={alignRight}
      alignTop={alignTop}
      alignMiddle={alignMiddle}
      alignBottom={alignBottom}
      {...props}
      padding={padding}
    >
      {title && (
        <>
          <Text bold textColor={titleColor}>
            {title}
          </Text>
          <Spacer size='x-small' />
        </>
      )}
      <Text textColor={descriptionColor}>{children}</Text>
    </Stack>
  )
}
