using UnityEngine;
using System.Collections;

public class ResetGame : MonoBehaviour {
	Transform respawnPoint;
	// Use this for initialization
	void Start () {
		this.respawnPoint = GameObject.FindGameObjectWithTag ("Respawn").transform;
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

    void OnTriggerEnter2D(Collider2D other)
    {
        if(other.tag == "Player1")
        {
           // var applicationName = Application.loadedLevel;
            //Application.LoadLevel(applicationName);
			other.transform.position = respawnPoint.position;
        }
        if (other.tag == "Player2")
        {
            other.transform.position = respawnPoint.position;
        }
    }
}
