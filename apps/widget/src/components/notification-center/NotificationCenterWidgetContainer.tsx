import { NotificationCenterWidget } from './NotificationCenterWidget';
import { useParams } from 'react-router-dom';
import { IMessage } from '@novu/shared';

export interface INotificationCenterWidgetContainerProps {
  onUrlChange: (url: string) => void;
  onNotificationClick: (notification: IMessage) => void;
  onUnseenCountChanged: (unseenCount: number) => void;
}

export function NotificationCenterWidgetContainer(props: INotificationCenterWidgetContainerProps) {
  const { applicationId = '' } = useParams<{ applicationId: string }>();

  return (
    <NotificationCenterWidget
      onNotificationClick={props.onNotificationClick}
      onUrlChange={props.onUrlChange}
      onUnseenCountChanged={props.onUnseenCountChanged}
      applicationIdentifier={applicationId}
    />
  );
}
