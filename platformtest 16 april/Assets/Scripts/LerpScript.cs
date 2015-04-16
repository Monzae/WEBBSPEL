using UnityEngine;
using System.Collections;

public class LerpScript : MonoBehaviour
{

    // Assigned in the inspector
 Transform position1;
 Transform position2;

    // Auxiliar variables

    // How fast the character moves
    public float speed = 1.0f;

    // Two types of lerp
    public enum LerpType { Constant, Smooth };
    public LerpType lerpType;

    // Constant Lerp variables

    // Initialization
    void Start()
    {
        position1 = gameObject.GetComponent<Transform>();
        position2 = gameObject.GetComponent<Transform>();
    }

   

    // Lerp is done over time
    void Update()
    {
        // Check for the selected type of lerp
        switch (lerpType)
        {
            case LerpType.Constant:
                // From position1 to position2 with incresing t
                transform.localScale = Vector3.Lerp(new Vector3(1, 1, 1), new Vector3(0, 1, 1), speed * 5);
                break;
            case LerpType.Smooth:
                // From actual position to destination with "constant" t
                transform.localScale = Vector3.Lerp(new Vector3(1,1,1), new Vector3(0,1,1), speed * Time.time);
                break;
        }
      
    }
}