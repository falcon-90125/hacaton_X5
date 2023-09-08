export interface Feedback {
   text: string;
   mark: number;
}

export interface AddressData {
   address: string;
   feedbacks: Feedback[];
   id: number;
 }
