export default interface Conversation {
  /**
   * 会話内容
   */
  text: string;
  /**
   * 時間
   */
  timeString: string;
  /**
   * 相手か自分か
   */
  isSelfMessage?: boolean;
  /**
   * 自分の場合、既読をつけるかどうか
   */
  isAlreadyRead?: boolean;
  /**
   * UUID
   */
  uuid: string;
}
