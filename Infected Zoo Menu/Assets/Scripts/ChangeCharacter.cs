using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using System.Collections.Generic;

public class ChangeCharacter : MonoBehaviour {

    public Image image;
    public List<Sprite> imageList;
    private Sprite activeImage;
    private int portNumber;
	void Start () 
    {
        portNumber = 0;
	}
	
	void Update () 
    {
	
	}
    public void ChangeCharacterPortraitForward()
    {
        if (portNumber < (imageList.Count - 1))
        {
            this.activeImage = (Sprite)Instantiate(imageList[portNumber += 1]);
            image.sprite = activeImage;
        }
        else
        { 
            portNumber = 0;
            this.activeImage = (Sprite)Instantiate(imageList[portNumber]);
            image.sprite = activeImage;
        }
    }

    public void ChangeCharacterPortraitBackward()
    {
        if (portNumber > (0))
        {
            this.activeImage = (Sprite)Instantiate(imageList[portNumber -= 1]);
            image.sprite = activeImage;
        }
        else
        {
            portNumber = (imageList.Count-1);
            this.activeImage = (Sprite)Instantiate(imageList[portNumber]);
            image.sprite = activeImage;
        }
    }
}
