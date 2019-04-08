// since we set our itemsCollection to take Item objects, we need to define what an Item object looks like
// remember that ? denotes optional values

export interface Item {
  id?: string;
  title?: string;
  description?: string;
}
